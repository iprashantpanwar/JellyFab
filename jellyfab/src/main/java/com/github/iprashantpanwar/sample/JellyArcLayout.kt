/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */

package com.github.iprashantpanwar.sample

import androidx.compose.ui.geometry.Offset
import kotlin.math.cos
import kotlin.math.sin

/**
 * Computes evenly spaced angles across an arc segment.
 *
 * Used to place the **primary mini FABs** around the main FAB.
 * For example:
 *  count = 3 with arc 270° → 180° produces:
 *  [270°, 225°, 180°] → (top, top-left, left)
 *
 * @param startDeg Starting angle in degrees.
 * @param endDeg Ending angle in degrees.
 * @param count Number of FABs to distribute on the arc.
 */
internal fun evenArcAngles(
    startDeg: Double = 270.0,
    endDeg: Double = 180.0,
    count: Int
): List<Double> {
    if (count <= 0) return emptyList()
    if (count == 1) return listOf(startDeg)

    val step = (endDeg - startDeg) / (count - 1)
    return List(count) { index -> startDeg + index * step }
}

/**
 * Converts polar coordinates (angle + radius) to a Cartesian 2D position.
 *
 * Used to position FABs on circular/arc paths around the main FAB.
 *
 * @param angleDeg Angle in degrees.
 * @param radius Distance from center.
 */
internal fun arcOffset(angleDeg: Double, radius: Float): Offset {
    val rad = Math.toRadians(angleDeg)
    return Offset(
        (cos(rad) * radius).toFloat(),
        (-sin(rad) * radius).toFloat() // negative Y → Compose coordinate space goes downward
    )
}

/**
 * Linear interpolation between two float values.
 *
 * @param a Start value.
 * @param b End value.
 * @param t Progress (0..1).
 */
internal fun lerp(a: Float, b: Float, t: Float): Float =
    a + (b - a) * t.coerceIn(0f, 1f)

/**
 * Linearly interpolates between two 2D points.
 *
 * Used heavily for **secondary FAB chaining**:
 * each new FAB emerges from where the previous FAB *currently is*.
 */
internal fun lerpOffset(a: Offset, b: Offset, t: Float): Offset =
    Offset(lerp(a.x, b.x, t), lerp(a.y, b.y, t))

/**
 * Normalizes an angle to the range (-π .. +π).
 *
 * Not currently used in JellyFab layout calculations,
 * but helpful if implementing dynamic arc rotations or circular drag gestures.
 */
internal fun normalizeAngleRad(a: Float): Float {
    var x = a % (2 * Math.PI).toFloat()
    if (x > Math.PI) x -= (2 * Math.PI).toFloat()
    if (x < -Math.PI) x += (2 * Math.PI).toFloat()
    return x
}
