/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 *
 * Core composable that coordinates:
 * - Main FAB (jelly blob rendering + rotation icon)
 * - Primary mini-FABs arranged on an arc (top, top-left, left)
 * - Optional secondary mini-FABs chained outward from the first primary FAB
 *
 * State drives everything:
 *  state.expanded → controls primary layer visibility
 *  state.secondaryExpanded → controls chained secondary layer
 *
 * Animations:
 *  - Distances, scaling, opacity (α), and positions use Animatable
 *  - Bulging jelly movement is handled in JellyPhysics.kt
 */

package com.github.iprashantpanwar.sample

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.FloatingActionButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.math.cos
import kotlin.math.sin

/**
 * Main JellyFab entry point — renders a floating action button with an
 * expandable, jelly-like motion. The main FAB animates with a soft blob effect,
 * primary actions fan out along an arc, and an optional secondary group can
 * chain outward from the first primary action.
 *
 * @param modifier Layout modifier for positioning the entire FAB group.
 *
 * @param state External state controller for expand/collapse behavior.
 * Use [rememberJellyFabState] to create and hoist this state.
 *
 * @param fabSize Diameter of the main (center) FAB.
 * Default is `72.dp` which matches Material 3 large FAB sizing.
 *
 * @param miniFabSize Diameter of the small mini-FABs used in primary
 * and secondary layers. Usually `48.dp`.
 *
 * @param fabColor Background color of:
 *  - The main FAB
 *  - Primary layer FABs (except the first one if secondary layer is enabled)
 *
 * @param secondLayerFabColor Background color used for FABs in the secondary layer,
 * including the first primary FAB when secondaryItems is not empty.
 *
 * @param primaryItems The list of actions forming the first fan-out arc
 * around the main FAB. Each [JellyFabItem] provides an icon + click action.
 *
 * @param secondaryItems Optional list of actions that expand outward in a chained,
 * cascading motion from the **first primary FAB**. If empty, JellyFab behaves as
 * a single-layer radial menu.
 *
 * @param showScrim When `true`, a subtle background scrim is shown behind the JellyFab while
 * expanded, helping bring focus to the action menu and visually dimming the underlying UI.
 *
 * @param config Fine-grained control for animation timing, bounce physics,
 * jelly squishiness, spacing, and layer layout geometry.
 *
 * Example usage:
 * ```
 * val state = rememberJellyFabState()
 * JellyFab(
 *     state = state,
 *     primaryItems = listOf(...),
 *     secondaryItems = listOf(...)
 * )
 * ```
 */

@Composable
fun JellyFab(
    modifier: Modifier = Modifier,
    state: JellyFabState = rememberJellyFabState(),
    fabSize: Dp = 72.dp,
    miniFabSize: Dp = 48.dp,
    fabColor: Color = Color(0xFFFF7F86),
    secondLayerFabColor: Color = Color(0xFF6BA5FF),
    primaryItems: List<JellyFabItem>,
    secondaryItems: List<JellyFabItem> = emptyList(),
    showScrim: Boolean = true,   // makes sense here
    config: JellyFabConfig = JellyFabConfig(),
) {
    val scope = rememberCoroutineScope()

    // Core animation holders (one Animatable per FAB)
    val primaryProgress = remember { primaryItems.map { Animatable(0f) } }
    val secondaryProgress = remember { secondaryItems.map { Animatable(0f) } }

    // Bulges drive the jelly blob wobble, separate from FAB motion
    val bulges = remember { primaryItems.map { Animatable(0f) } }

    // Prevent overlapping animation sequences when toggling state quickly
    var primaryAnimJob by remember { mutableStateOf<Job?>(null) }
    var secondaryAnimJob by remember { mutableStateOf<Job?>(null) }

    // First launch: snap to initial state (no animation on startup)
    var didRunOnce by rememberSaveable { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        primaryProgress.forEach { it.snapTo(if (state.expanded) 1f else 0f) }
        bulges.forEach { it.snapTo(0f) }
        secondaryProgress.forEach { it.snapTo(if (state.secondaryExpanded) 1f else 0f) }
    }

    // Animate primary ring expand/collapse when state.expanded changes
    LaunchedEffect(state.expanded) {
        primaryAnimJob?.cancel()

        if (!didRunOnce) {
            didRunOnce = true
            return@LaunchedEffect // Skip animation on initial draw
        }

        primaryAnimJob = scope.launch {
            if (state.expanded) {
                expandPrimaryLayer(primaryProgress, bulges, config) { bulge ->
                    playDoubleBounce(bulge, outward = true, soft = true)
                }
            } else {
                collapsePrimaryLayer(
                    primaryProgress, bulges, config,
                    bounceTopBulge = { playDoubleBounce(it, outward = false) },
                    bounceSideBulge = { playDoubleBounce(it, outward = false) }
                )
            }
        }
    }

    // Animate secondary chained ring
    LaunchedEffect(state.secondaryExpanded) {
        secondaryAnimJob?.cancel()
        secondaryAnimJob = scope.launch {
            if (state.secondaryExpanded) {
                expandSecondaryLayer(secondaryProgress, config)
            } else {
                collapseSecondaryLayer(secondaryProgress, config)
            }
        }
    }

    val centerCorrect = (miniFabSize - fabSize) / 2f

    Box(
        modifier = modifier
            .fillMaxSize()
    ) {
        // SCRIM OVERLAY (fade + tap-to-collapse)
        val scrimVisible = state.expanded || state.secondaryExpanded
        val scrimAlpha by animateFloatAsState(
            targetValue = if (scrimVisible) 1f else 0f,
            animationSpec = tween(250)
        )

        if (showScrim && scrimAlpha > 0.01f) { // avoid capturing clicks at alpha ~= 0
            Box(
                Modifier
                    .matchParentSize()
                    .graphicsLayer { alpha = scrimAlpha }
                    .background(Color.White.copy(alpha = 0.55f))
                    .clickable(
                        indication = null,
                        interactionSource = remember { MutableInteractionSource() }
                    ) {
                        scope.launch {
                            state.secondaryExpanded = false
                            delay(secondaryCollapseDuration(secondaryItems.size, config))
                            state.expanded = false
                        }
                    }
            )
        }

        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            contentAlignment = Alignment.BottomEnd
        ) {

            // Precompute positions of primary ring on arc
            val primaryAngles =
                remember(primaryItems.size) { evenArcAngles(count = primaryItems.size) }
            val primaryPositions = remember { MutableList(primaryItems.size) { Offset.Zero } }

            // ---------- PRIMARY LAYER ----------
            primaryItems.forEachIndexed { index, item ->
                val angleRad = Math.toRadians(primaryAngles[index])
                val p = primaryProgress[index].value
                val dx = (cos(angleRad) * config.layerDistance.value * p)
                val dy = (sin(angleRad) * config.layerDistance.value * p)
                primaryPositions[index] = Offset(dx.toFloat(), dy.toFloat())

                FloatingActionButton(
                    onClick = {
                        when {
                            // toggle secondary ring from the first mini FAB
                            index == 0 && secondaryItems.isNotEmpty() ->
                                state.secondaryExpanded = !state.secondaryExpanded

                            // clicking another primary mini while secondary is open collapses everything
                            state.secondaryExpanded -> {
                                scope.launch {
                                    state.secondaryExpanded = false
                                    delay(secondaryCollapseDuration(secondaryItems.size, config))
                                    state.expanded = false
                                }
                            }

                            else -> state.expanded = false
                        }
                    },
                    modifier = Modifier
                        .offset(dx.dp + centerCorrect, dy.dp + centerCorrect)
                        .graphicsLayer {
                            scaleX = 0.8f + 0.2f * p
                            scaleY = 0.8f + 0.2f * p
                        }
                        .size(miniFabSize),
                    shape = CircleShape,
                    containerColor = if (index == 0 && secondaryItems.isNotEmpty()) secondLayerFabColor else fabColor,
                    elevation = FloatingActionButtonDefaults.elevation(0.dp)
                ) {
                    val icon: ImageVector =
                        if (index == 0 && secondaryItems.isNotEmpty())
                            animatedSecondaryToggleIcon(
                                secondaryExpanded = state.secondaryExpanded,
                                delayOnCollapse = secondaryCollapseDuration(
                                    secondaryItems.size,
                                    config
                                )
                            )
                        else item.icon

                    Icon(icon, null, tint = Color.White)
                }
            }

            // ---------- SECONDARY LAYER (CHAIN / ARC ABOVE PRIMARY) ----------
            if (state.secondaryExpanded || secondaryProgress.any { it.value > 0f }) {
                val radius = config.layerDistance.value * config.secondaryLayerSpacingMultiplier
                val anchor = primaryPositions.firstOrNull() ?: Offset.Zero
                var prevOrigin = anchor
                var prevTarget = anchor

                secondaryItems.forEachIndexed { i, item ->
                    val p = secondaryProgress[i].value
                    val angle = 90 + (90.0 / (secondaryItems.size - 1).coerceAtLeast(1)) * i
                    val target = arcOffset(angle, radius)

                    val prevProg = if (i == 0) 1f else secondaryProgress[i - 1].value
                    val prevCurrent = lerpOffset(prevOrigin, prevTarget, prevProg)
                    val current = lerpOffset(prevCurrent, target, p)

                    prevOrigin = prevCurrent
                    prevTarget = target

                    FloatingActionButton(
                        onClick = {
                            scope.launch {
                                state.secondaryExpanded = false
                                delay(secondaryCollapseDuration(secondaryItems.size, config))
                                state.expanded = false
                                item.onClick()
                            }
                        },
                        modifier = Modifier
                            .offset(current.x.dp + centerCorrect, current.y.dp + centerCorrect)
                            .graphicsLayer {
                                alpha = p
                                scaleX = 0.8f + 0.2f * p
                                scaleY = 0.8f + 0.2f * p
                            }
                            .size(miniFabSize),
                        shape = CircleShape,
                        containerColor = secondLayerFabColor,
                        elevation = FloatingActionButtonDefaults.elevation(0.dp)
                    ) {
                        Icon(item.icon, null, tint = Color.White)
                    }
                }
            }

            // ---------- MAIN JELLY BLOB FAB ----------
            Box(modifier = Modifier.size(fabSize), contentAlignment = Alignment.Center) {

                JellyBlob(
                    size = fabSize,
                    color = fabColor,
                    bulges = bulges.map { it.value },
                    shadowOpacity = config.shadowOpacity,
                    shadowBlurFactor = config.shadowBlurFactor,
                    bulgeAngles = primaryAngles,
                    bounceFactor = config.bounceFactor
                )

                val rotation by animateFloatAsState(if (state.expanded) 0f else 45f, tween(260))

                Box(
                    Modifier
                        .size(fabSize)
                        .clickable(
                            indication = null,
                            interactionSource = remember { MutableInteractionSource() }
                        ) {
                            when {
                                !state.expanded -> state.expanded = true
                                state.secondaryExpanded -> {
                                    scope.launch {
                                        state.secondaryExpanded = false
                                        delay(
                                            secondaryCollapseDuration(
                                                secondaryItems.size,
                                                config
                                            )
                                        )
                                        state.expanded = false
                                    }
                                }

                                else -> state.expanded = false
                            }
                        },
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        CloseIcon,
                        null,
                        tint = Color.White,
                        modifier = Modifier
                            .size(32.dp)
                            .rotate(rotation)
                    )
                }
            }
        }
    }
}

/**
 * Handles delayed icon-switching for the primary mini FAB when toggling secondary layer.
 */
@Composable
internal fun animatedSecondaryToggleIcon(
    secondaryExpanded: Boolean,
    delayOnCollapse: Long = 360L
): ImageVector {
    var icon by remember { mutableStateOf(MoreHorizontal) }

    LaunchedEffect(secondaryExpanded) {
        if (secondaryExpanded) {
            icon = CloseIcon
        } else {
            delay(delayOnCollapse) // switch only after collapse finishes
            icon = MoreHorizontal
        }
    }

    return icon
}
