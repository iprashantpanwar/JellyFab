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
import androidx.compose.animation.core.AnimationVector1D
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.FloatingActionButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.math.cos
import kotlin.math.sin
import kotlin.time.Duration.Companion.milliseconds

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
    showScrim: Boolean = true,
    config: JellyFabConfig = JellyFabConfig(),
) {
    val scope = rememberCoroutineScope()

    // Core animation holders (one Animatable per FAB)
    val primaryProgress = remember(primaryItems.size) {
        List(primaryItems.size) {
            Animatable(if (state.expanded) 1f else 0f)
        }
    }
    val secondaryProgress = remember(secondaryItems.size) {
        List(secondaryItems.size) {
            Animatable(if (state.secondaryExpanded) 1f else 0f)
        }
    }
    // Bulges drive the jelly blob wobble, separate from FAB motion
    val bulges = remember(primaryItems.size) {
        List(primaryItems.size) {
            Animatable(0f)
        }
    }

    // First launch: snap to initial state (no animation on startup)
    var didRunOnce by remember { mutableStateOf(false) }

    val rotationAnim = remember { Animatable(if (state.expanded) 0f else 45f) }
    LaunchedEffect(state.expanded) {
        rotationAnim.animateTo(if (state.expanded) 0f else 45f, tween(260))
    }

    // Animate primary ring expand/collapse when state.expanded changes
    LaunchedEffect(state.expanded) {
        if (!didRunOnce) {
            didRunOnce = true
            return@LaunchedEffect
        }

        if (state.expanded) {
            expandPrimaryLayer(
                primaryProgress,
                bulges,
                config
            ) { bulge ->
                playDoubleBounce(
                    bulge,
                    outward = true,
                    soft = true
                )
            }
        } else {
            collapsePrimaryLayer(
                primaryProgress,
                bulges,
                config,
                bounceTopBulge = {
                    playDoubleBounce(it, outward = false)
                },
                bounceSideBulge = {
                    playDoubleBounce(it, outward = false)
                }
            )
        }
    }

    // Animate secondary chained ring
    LaunchedEffect(state.secondaryExpanded) {
        if (state.secondaryExpanded) {
            expandSecondaryLayer(
                secondaryProgress,
                config
            )
        } else {
            collapseSecondaryLayer(
                secondaryProgress,
                config
            )
        }
    }

    suspend fun collapseMenu() {
        if (state.secondaryExpanded) {
            state.secondaryExpanded = false

            delay(
                secondaryCollapseDuration(
                    secondaryItems.size,
                    config
                ).milliseconds
            )
        }

        state.expanded = false
    }

    val centerCorrect = (miniFabSize - fabSize) / 2f

    Box(
        modifier = modifier
            .fillMaxSize()
    ) {
        if (showScrim) {
            // SCRIM OVERLAY (fade + tap-to-collapse)
            Scrim(
                modifier = Modifier.matchParentSize(),
                visible = state.expanded || state.secondaryExpanded,
            ) {
                scope.launch {
                    collapseMenu()
                }
            }
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
            PrimaryFabLayer(
                items = primaryItems,
                progress = primaryProgress,
                angles = primaryAngles,
                fabSize = miniFabSize,
                centerCorrect = centerCorrect,
                config = config,
                fabColor = { index ->
                    if (index == 0 && secondaryItems.isNotEmpty()) {
                        secondLayerFabColor
                    } else {
                        fabColor
                    }
                },
                icon = { index ->
                    val isSecondaryToggle = index == 0 && secondaryItems.isNotEmpty()
                    if (isSecondaryToggle) {
                        animatedSecondaryToggleIcon(
                            secondaryExpanded = state.secondaryExpanded,
                            delayOnCollapse = secondaryCollapseDuration(secondaryItems.size, config)
                        )
                    } else {
                        primaryItems[index].icon
                    }
                },
                onPositionChanged = { index, position ->
                    primaryPositions[index] = position
                },
                onClick = { index ->
                    when {
                        index == 0 && secondaryItems.isNotEmpty() -> {
                            state.secondaryExpanded = !state.secondaryExpanded
                        }

                        else -> scope.launch {
                            collapseMenu()
                        }
                    }
                }
            )

            val isSecondaryLayerVisible by remember(secondaryProgress) {
                derivedStateOf {
                    state.secondaryExpanded || secondaryProgress.any { it.value > 0f }
                }
            }

            // ---------- SECONDARY LAYER (CHAIN / ARC ABOVE PRIMARY) ----------
            SecondaryFabLayer(
                visible = isSecondaryLayerVisible,
                progress = secondaryProgress,
                items = secondaryItems,
                anchor = primaryPositions.firstOrNull() ?: Offset.Zero,
                miniFabSize = miniFabSize,
                centerCorrect = centerCorrect,
                containerColor = secondLayerFabColor,
                config = config,
                onItemClick = { item ->
                    scope.launch {
                        collapseMenu()
                        item.onClick()
                    }
                }
            )

            // ---------- MAIN JELLY BLOB FAB ----------
            JellyFabBlob(
                size = fabSize,
                color = fabColor,
                bulges = bulges,
                bulgeAngles = primaryAngles,
                shadowOpacity = config.shadowOpacity,
                shadowBlurFactor = config.shadowBlurFactor,
                bounceFactor = config.bounceFactor,
                rotation = rotationAnim,
                onClick = {
                    when {
                        !state.expanded -> state.expanded = true
                        else -> {
                            scope.launch {
                                collapseMenu()
                            }
                        }
                    }
                }
            )
        }
    }
}

/**
 * Draws the background scrim shown while any JellyFab layer is expanded.
 *
 * The scrim fades in and out based on [visible] and intercepts taps while visible,
 * allowing the caller to collapse the menu through [onClick]. It remains composed
 * during the fade-out animation and is removed once its alpha is effectively zero,
 * preventing an invisible scrim from consuming pointer input.
 *
 * @param modifier Modifier used to position and size the scrim. The caller is
 * responsible for providing the desired parent-relative sizing, such as
 * `Modifier.matchParentSize()`.
 * @param visible Whether the scrim should be visible. Changes to this value
 * animate the scrim between fully visible and transparent.
 * @param onClick Invoked when the visible scrim is tapped.
 */
@Composable
private fun Scrim(
    modifier: Modifier = Modifier,
    visible: Boolean,
    onClick: () -> Unit,
) {
    val scrimAlpha by animateFloatAsState(
        targetValue = if (visible) 1f else 0f,
        animationSpec = tween(250)
    )

    val isScrimVisible by remember {
        derivedStateOf { scrimAlpha > 0.01f }
    }

    if (isScrimVisible) { // avoid capturing clicks at alpha ~= 0
        Box(
            modifier
                .graphicsLayer { alpha = scrimAlpha }
                .background(Color.White.copy(alpha = 0.55f))
                .clickable(
                    indication = null,
                    interactionSource = remember { MutableInteractionSource() }
                ) {
                    onClick()
                }
        )
    }
}

/**
 * Renders the primary layer of mini FABs around the main JellyFab.
 *
 * Each item is assigned an angle from [angles] and animated independently using
 * its corresponding entry in [progress]. The layer itself does not read animation
 * progress values; frame-dependent positioning and scaling are deferred to
 * [PrimaryFabItem].
 *
 * The current position of each FAB is reported through [onPositionChanged].
 * This allows the first primary FAB to act as the anchor for the optional
 * secondary layer without making those positions observable Compose state.
 *
 * @param items Actions displayed in the primary layer.
 * @param progress Animation progress holders corresponding to [items].
 * Each value represents the expansion progress of one primary FAB.
 * @param angles Angular positions, in degrees, used to place the primary FABs
 * around the main FAB.
 * @param fabSize Diameter of each primary mini FAB.
 * @param centerCorrect Positional correction used to align mini FABs relative
 * to the differently sized main FAB.
 * @param config JellyFab configuration containing shared layout and animation values.
 * @param onClick Invoked with the index of the primary FAB that was tapped.
 * @param fabColor Resolves the container color for a primary FAB at the given index.
 * @param icon Resolves the icon for a primary FAB at the given index. The lambda is
 * composable so state-driven icons, such as the secondary-layer toggle, can react
 * independently to state changes.
 * @param onPositionChanged Reports the current animated position of a primary FAB,
 * identified by its index.
 */
@Composable
private fun PrimaryFabLayer(
    items: List<JellyFabItem>,
    progress: List<Animatable<Float, AnimationVector1D>>,
    angles: List<Double>,
    fabSize: Dp,
    centerCorrect: Dp,
    config: JellyFabConfig,
    onClick: (Int) -> Unit,
    fabColor: (Int) -> Color,
    icon: @Composable (Int) -> ImageVector,
    onPositionChanged: (Int, Offset) -> Unit
) {
    items.forEachIndexed { index, _ ->
        PrimaryFabItem(
            progress = progress[index],
            angleDeg = angles[index],
            layerDistance = config.layerDistance,
            centerCorrect = centerCorrect,
            miniFabSize = fabSize,
            containerColor = fabColor(index),
            icon = icon(index),
            onPositionChanged = { position ->
                onPositionChanged(index, position)
            },
            onClick = {
                onClick(index)
            }
        )
    }
}

/**
 * Renders and animates a single FAB in the primary action layer.
 *
 * The FAB moves radially from the main FAB toward [angleDeg] as [progress]
 * advances from `0f` to `1f`. Position and scale read [progress] from the
 * layout and graphics phases rather than during composition, allowing animation
 * frames to update the FAB without requiring recomposition.
 *
 * The calculated radial position is exposed through [onPositionChanged] so it
 * can be used as an anchor by dependent layers.
 *
 * @param progress Expansion progress for this FAB, where `0f` represents the
 * collapsed position and `1f` represents its fully expanded position.
 * @param angleDeg Direction, in degrees, along which the FAB expands.
 * @param layerDistance Distance from the main FAB at full expansion.
 * @param centerCorrect Positional correction used to center the mini FAB relative
 * to the main FAB.
 * @param miniFabSize Diameter of the FAB.
 * @param containerColor Background color of the FAB.
 * @param icon Icon displayed inside the FAB.
 * @param onPositionChanged Invoked with the current animated radial position
 * whenever the FAB is laid out.
 * @param onClick Invoked when the FAB is tapped.
 */
@Composable
private fun PrimaryFabItem(
    progress: Animatable<Float, AnimationVector1D>,
    angleDeg: Double,
    layerDistance: Dp,
    centerCorrect: Dp,
    miniFabSize: Dp,
    containerColor: Color,
    icon: ImageVector,
    onPositionChanged: (Offset) -> Unit,
    onClick: () -> Unit
) {
    FloatingActionButton(
        onClick = onClick,
        modifier = Modifier
            .offset {
                // deferred to layout phase this read no longer touches JellyFab's composition
                val p = progress.value
                val angleRad = Math.toRadians(angleDeg)
                val dx = (cos(angleRad) * layerDistance.value * p).toFloat()
                val dy = (sin(angleRad) * layerDistance.value * p).toFloat()
                val dxDp = dx.dp + centerCorrect
                val dyDp = dy.dp + centerCorrect
                onPositionChanged(Offset(dx, dy))
                IntOffset(dxDp.roundToPx(), dyDp.roundToPx())
            }
            .graphicsLayer {
                // separate read, deferred to draw phase not shared with the offset lambda above
                val p = progress.value
                scaleX = 0.8f + 0.2f * p
                scaleY = 0.8f + 0.2f * p
            }
            .size(miniFabSize),
        shape = CircleShape,
        containerColor = containerColor,
        elevation = FloatingActionButtonDefaults.elevation(0.dp)
    ) {
        Icon(icon, contentDescription = null, tint = Color.White)
    }
}

/**
 * Renders the optional secondary layer of mini FABs as a chained arc extending
 * from the first primary FAB.
 *
 * The layer calculates the static target position of each secondary action.
 * Animated positions are resolved by [SecondaryFabItem], keeping frame-dependent
 * animation reads out of this composition scope.
 *
 * Unlike the primary layer, secondary FABs use chained motion: each FAB travels
 * from the current position produced by the preceding FAB toward its own target.
 * This creates the cascading expansion and collapse characteristic of JellyFab.
 *
 * @param visible Whether the secondary layer should remain in composition.
 * This should stay `true` while a collapse animation is still in progress.
 * @param progress Animation progress holders corresponding to [items].
 * @param items Actions displayed in the secondary layer.
 * @param anchor Current position of the primary FAB from which the secondary
 * chain originates.
 * @param miniFabSize Diameter of each secondary FAB.
 * @param centerCorrect Positional correction used to align mini FABs relative
 * to the main FAB.
 * @param containerColor Background color applied to secondary FABs.
 * @param config JellyFab configuration containing spacing and layout values.
 * @param onItemClick Invoked with the [JellyFabItem] selected by the user.
 */
@Composable
private fun SecondaryFabLayer(
    visible: Boolean,
    progress: List<Animatable<Float, AnimationVector1D>>,
    items: List<JellyFabItem>,
    anchor: Offset,
    miniFabSize: Dp,
    centerCorrect: Dp,
    containerColor: Color,
    config: JellyFabConfig,
    onItemClick: (JellyFabItem) -> Unit
) {
    if (!visible) return

    val radius = config.layerDistance.value * config.secondaryLayerSpacingMultiplier

    val targets = remember(items.size, radius) {
        List(items.size) { index ->
            val angle = 90 + (90.0 / (items.size - 1).coerceAtLeast(1)) * index
            arcOffset(angle, radius)
        }
    }

    items.forEachIndexed { index, item ->
        SecondaryFabItem(
            index = index,
            progress = progress,
            anchor = anchor,
            targets = targets,
            miniFabSize = miniFabSize,
            centerCorrect = centerCorrect,
            containerColor = containerColor,
            icon = item.icon,
            onClick = { onItemClick(item) }
        )
    }
}

/**
 * Renders and animates a single FAB in the secondary chained layer.
 *
 * The FAB's origin is derived from the animated positions of all preceding
 * secondary FABs. This preserves the chained motion where each action appears
 * to emerge from the previous action rather than directly from [anchor].
 *
 * Animation progress is read during layout and graphics phases so position,
 * opacity, and scale can update without recomposing the secondary layer on
 * every animation frame.
 *
 * @param index Position of this FAB within the secondary chain.
 * @param progress Animation progress holders for the complete secondary chain.
 * Entries from `0` through [index] are used to reconstruct this FAB's current
 * chained position.
 * @param anchor Position from which the secondary chain begins, normally the
 * current position of the first primary FAB.
 * @param targets Fully expanded target positions for all secondary FABs.
 * @param miniFabSize Diameter of this secondary FAB.
 * @param centerCorrect Positional correction used to center the FAB relative
 * to the main FAB.
 * @param containerColor Background color of the FAB.
 * @param icon Icon displayed inside the FAB.
 * @param onClick Invoked when the FAB is tapped.
 */
@Composable
private fun SecondaryFabItem(
    index: Int,
    progress: List<Animatable<Float, AnimationVector1D>>,
    anchor: Offset,
    targets: List<Offset>,
    miniFabSize: Dp,
    centerCorrect: Dp,
    containerColor: Color,
    icon: ImageVector,
    onClick: () -> Unit
) {
    FloatingActionButton(
        onClick = onClick,
        modifier = Modifier
            .offset {
                var origin = anchor
                for (i in 0 until index) {
                    origin = lerpOffset(
                        origin,
                        targets[i],
                        progress[i].value
                    )
                }

                val current = lerpOffset(
                    origin,
                    targets[index],
                    progress[index].value
                )

                IntOffset(
                    (current.x.dp + centerCorrect).roundToPx(),
                    (current.y.dp + centerCorrect).roundToPx()
                )
            }
            .graphicsLayer {
                val p = progress[index].value
                alpha = p
                scaleX = 0.8f + 0.2f * p
                scaleY = 0.8f + 0.2f * p
            }
            .size(miniFabSize),
        shape = CircleShape,
        containerColor = containerColor,
        elevation = FloatingActionButtonDefaults.elevation(0.dp)
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Color.White
        )
    }
}

/**
 * Renders the main interactive JellyFab.
 *
 * The component combines [JellyBlob], which draws the deformable jelly surface
 * and shadow, with the main action icon layered above it. Blob deformation is
 * driven by [bulges], while [rotation] controls the icon rotation independently.
 *
 * Animation state is passed through as [Animatable] instances so frame-dependent
 * values can be consumed by the underlying drawing and graphics phases without
 * forcing the parent JellyFab to observe every animation frame.
 *
 * @param size Diameter of the main FAB.
 * @param color Fill color of the jelly blob.
 * @param bulges Animation holders controlling deformation around the blob.
 * @param bulgeAngles Angles, in degrees, associated with the individual bulges.
 * @param shadowOpacity Base opacity of the blob shadow.
 * @param shadowBlurFactor Controls the softness and spread of the blob shadow.
 * @param bounceFactor Controls how strongly animated bulges deform the blob.
 * @param rotation Animation controlling the rotation of the main FAB icon.
 * @param onClick Invoked when the main JellyFab is tapped.
 */
@Composable
private fun JellyFabBlob(
    size: Dp,
    color: Color,
    bulges: List<Animatable<Float, AnimationVector1D>>,
    bulgeAngles: List<Double>,
    shadowOpacity: Float,
    shadowBlurFactor: Float,
    bounceFactor: Float,
    rotation: Animatable<Float, AnimationVector1D>,
    onClick: () -> Unit,
) {
    Box(
        modifier = Modifier.size(size),
        contentAlignment = Alignment.Center
    ) {
        JellyBlob(
            size = size,
            blobColor = color,
            bulges = bulges,
            shadowOpacity = shadowOpacity,
            shadowBlurFactor = shadowBlurFactor,
            bulgeAngles = bulgeAngles,
            bounceFactor = bounceFactor
        )

        Box(
            modifier = Modifier
                .size(size)
                .clickable(
                    indication = null,
                    interactionSource = remember {
                        MutableInteractionSource()
                    },
                    onClick = onClick
                ),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = CloseIcon,
                contentDescription = null,
                tint = Color.White,
                modifier = Modifier
                    .size(32.dp)
                    .graphicsLayer {
                        rotationZ = rotation.value
                    }
            )
        }
    }
}

/**
 * Resolves the icon displayed by the first primary FAB when it acts as the
 * secondary-layer toggle.
 *
 * The icon switches to [CloseIcon] immediately when the secondary layer expands.
 * During collapse, switching back to [MoreHorizontal] is delayed until the
 * secondary collapse animation has completed. This keeps the close icon visible
 * while secondary actions retract into their anchor.
 *
 * @param secondaryExpanded Whether the secondary action layer is expanded.
 * @param delayOnCollapse Delay, in milliseconds, before restoring the default
 * icon after the secondary layer begins collapsing.
 *
 * @return The icon that should currently be displayed by the secondary-layer toggle.
 */
@Composable
private fun animatedSecondaryToggleIcon(
    secondaryExpanded: Boolean,
    delayOnCollapse: Long = 360L
): ImageVector {
    var icon by remember { mutableStateOf(MoreHorizontal) }

    LaunchedEffect(secondaryExpanded) {
        if (secondaryExpanded) {
            icon = CloseIcon
        } else {
            delay(delayOnCollapse.milliseconds) // switch only after collapse finishes
            icon = MoreHorizontal
        }
    }

    return icon
}
