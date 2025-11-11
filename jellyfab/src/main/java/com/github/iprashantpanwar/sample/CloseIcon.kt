/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */

package com.github.iprashantpanwar.sample

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp

val CloseIcon: ImageVector
    get() {
        if (_CloseIcon != null) {
            return _CloseIcon!!
        }
        _CloseIcon = ImageVector.Builder(
            name = "CloseIcon",
            defaultWidth = 32.dp,
            defaultHeight = 32.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        ).apply {
            path(
                fill = SolidColor(Color(0xFFFFFFFF)),
                stroke = SolidColor(Color(0xFFFFFFFF)),
                strokeLineWidth = 2f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
                pathFillType = PathFillType.NonZero
            ) {
                moveTo(16f, 16f)
                lineTo(12f, 12f)
                moveTo(12f, 12f)
                lineTo(8f, 8f)
                moveTo(12f, 12f)
                lineTo(16f, 8f)
                moveTo(12f, 12f)
                lineTo(8f, 16f)
            }
        }.build()
        return _CloseIcon!!
    }

private var _CloseIcon: ImageVector? = null
