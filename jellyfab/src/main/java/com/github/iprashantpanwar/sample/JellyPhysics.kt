/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */

package com.github.iprashantpanwar.sample

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationVector1D
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.LinearOutSlowInEasing
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

/**
 * Performs the soft "double-bounce" micro animation on the jelly surface.
 *
 * Used primarily when:
 * - The last primary FAB completes expansion (outward bounce)
 * - The first & last FABs settle on collapse (inward bounce)
 *
 * @param target The Animatable controlling bulge magnitude at a specific anchor point.
 * @param outward Whether the bulge should push outward (true) or inward (false).
 * @param soft If true, uses a gentler bounce curve (used only during expansion).
 */
internal suspend fun playDoubleBounce(
    target: Animatable<Float, AnimationVector1D>,
    outward: Boolean,
    soft: Boolean = false
) {
    val dir = if (outward) 1f else -1f
    val seq = if (soft)
        listOf(0f, 0.7f * dir, -0.3f * dir, 0.1f * dir, 0f)
    else
        listOf(0f, 1f * dir, -0.6f * dir, 0.3f * dir, 0f)

    for (i in 1 until seq.size) {
        target.animateTo(seq[i], tween(90, easing = LinearOutSlowInEasing))
    }
}

/**
 * Expands the primary layer of mini FABs outward in a staggered arc.
 *
 * - Moves each FAB outward progressively along its arc path.
 * - Triggers a bulge ripple for each step.
 * - Applies a finishing "soft bounce" on the last FAB to signal completion.
 */
internal suspend fun expandPrimaryLayer(
    primaryProgress: List<Animatable<Float, AnimationVector1D>>,
    bulges: List<Animatable<Float, AnimationVector1D>>,
    config: JellyFabConfig,
    bounceLastBulge: suspend (bulge: Animatable<Float, AnimationVector1D>) -> Unit
) = coroutineScope {
    primaryProgress.indices.forEach { i ->
        launch { primaryProgress[i].animateTo(1f, tween(400, easing = FastOutSlowInEasing)) }

        launch {
            bulges[i].snapTo(0f)
            bulges[i].animateTo(1f, tween(140, easing = LinearOutSlowInEasing))
            bulges[i].animateTo(0f, spring(dampingRatio = Spring.DampingRatioHighBouncy))
        }

        delay(config.expandStagger)

        if (i == primaryProgress.lastIndex) {
            bounceLastBulge(bulges[i])
        }
    }
}

/**
 * Collapses the primary layer of mini FABs inward in sequence.
 *
 * - Each FAB retracts along its arc path.
 * - Each bulge is briefly pulsed for a subtle closing wobble.
 * - The top-most and side-most bulges get coordinated finishing "thumps".
 */
internal suspend fun collapsePrimaryLayer(
    primaryProgress: List<Animatable<Float, AnimationVector1D>>,
    bulges: List<Animatable<Float, AnimationVector1D>>,
    config: JellyFabConfig,
    bounceTopBulge: suspend (bulge: Animatable<Float, AnimationVector1D>) -> Unit,
    bounceSideBulge: suspend (bulge: Animatable<Float, AnimationVector1D>) -> Unit
) = coroutineScope {
    for (i in primaryProgress.indices) {
        launch {
            bulges[i].snapTo(0f)
            bulges[i].animateTo(0.3f, tween(100))
            bulges[i].animateTo(0f, tween(160))
        }
        launch { primaryProgress[i].animateTo(0f, tween(300, easing = FastOutSlowInEasing)) }

        delay(config.collapseStagger)
    }

    launch { bounceTopBulge(bulges.first()) }
    launch {
        delay(50)
        bounceSideBulge(bulges.last())
    }
}

/**
 * Expands the secondary chained FABs along the curved "fan" above the primary layer.
 *
 * Uses a staggered overshoot → settle animation to give a soft, organic reveal.
 */
internal suspend fun expandSecondaryLayer(
    secondaryProgress: List<Animatable<Float, AnimationVector1D>>,
    config: JellyFabConfig
) = coroutineScope {
    secondaryProgress.indices.forEach { i ->
        launch {
            delay(i * config.secondaryExpandStagger)
            secondaryProgress[i].animateTo(1.06f, tween(320, easing = FastOutSlowInEasing))
            secondaryProgress[i].animateTo(1f, spring(dampingRatio = Spring.DampingRatioMediumBouncy))
        }
    }
}

/**
 * Collapses the secondary chained FABs back to their anchor point.
 *
 * The collapse staggers in reverse order, creating a smooth chain-closing effect.
 */
internal suspend fun collapseSecondaryLayer(
    secondaryProgress: List<Animatable<Float, AnimationVector1D>>,
    config: JellyFabConfig
) = coroutineScope {
    for (i in secondaryProgress.indices.reversed()) {
        launch {
            delay((secondaryProgress.size - 1 - i) * config.secondaryCollapseStagger)
            secondaryProgress[i].animateTo(0f, tween(300, easing = FastOutSlowInEasing))
        }
    }
}

/**
 * Orchestrates a full nested close:
 * 1) Collapse secondary layer
 * 2) Once visually done, collapse primary layer
 */
internal suspend fun collapseSecondaryThenPrimary(
    secondaryProgress: List<Animatable<Float, AnimationVector1D>>,
    primaryProgress: List<Animatable<Float, AnimationVector1D>>,
    bulges: List<Animatable<Float, AnimationVector1D>>,
    config: JellyFabConfig,
    bounceTop: suspend (Animatable<Float, AnimationVector1D>) -> Unit,
    bounceSide: suspend (Animatable<Float, AnimationVector1D>) -> Unit
) = coroutineScope {
    collapseSecondaryLayer(secondaryProgress, config)
    delay(secondaryCollapseDuration(secondaryProgress.size, config))
    collapsePrimaryLayer(primaryProgress, bulges, config, bounceTop, bounceSide)
}

/**
 * Computes the total collapse duration for the secondary layer, used to
 * time-dependent animations such as closing both layers sequentially.
 */
internal fun secondaryCollapseDuration(
    secondaryCount: Int,
    config: JellyFabConfig
): Long {
    if (secondaryCount <= 0) return 0L
    val tailStagger = (secondaryCount - 1) * config.secondaryCollapseStagger
    return tailStagger + 200L
}
