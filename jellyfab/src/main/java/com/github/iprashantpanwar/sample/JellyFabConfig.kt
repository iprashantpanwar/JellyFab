/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */

package com.github.iprashantpanwar.sample

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * Configuration for JellyFab animation feel, layout spacing, and motion physics.
 *
 * Most of these values are "texture controls" — tweak them to make the FAB menu feel
 * snappier, softer, slower, or more playful.
 */
@Immutable
@Stable
data class JellyFabConfig(

    /**
     * Delay between each primary-layer FAB expanding outward (ms).
     * Higher values = more sequential "bloom" animation.
     */
    val expandStagger: Long = 150L,

    /**
     * Delay between each primary-layer FAB collapsing inward (ms).
     * Generally slightly small than [expandStagger] for a quicker close.
     */
    val collapseStagger: Long = 100L,

    /**
     * Delay between each secondary FAB expanding along the arc (ms).
     */
    val secondaryExpandStagger: Long = 150L,

    /**
     * Delay between each secondary FAB collapsing back inward (ms).
     * Smaller values = quicker collapse motion.
     */
    val secondaryCollapseStagger: Long = 80L,

    /**
     * Base opacity used when drawing the glowing soft shadow under the main FAB.
     * Higher = darker shadow.
     */
    val shadowOpacity: Float = 0.55f,

    /**
     * Multiplier controlling how far the shadow softens/spreads when bulges animate.
     */
    val shadowBlurFactor: Float = 0.2f,

    /**
     * How strongly the blob surface stretches at each bulge point.
     * Increase for more “jelly wobble”.
     */
    val bounceFactor: Float = 0.18f,

    /**
     * Multiplier controlling how far secondary FABs extend outward relative
     * to the primary layer distance.
     */
    val secondaryLayerSpacingMultiplier: Float = 1.8f,

    /**
     * Base distance from the main FAB to the primary-layer FABs.
     * Increase to spread items farther apart.
     */
    val layerDistance: Dp = 80.dp,
)
