/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */

package com.github.iprashantpanwar.sample

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.ImageVector.Builder
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp

val MoreHorizontal: ImageVector
    get() {
        if (_MoreHorizontal != null) {
            return _MoreHorizontal!!
        }
        _MoreHorizontal = Builder(
            name = "MoreHorizontal",
            defaultWidth = 24.dp,
            defaultHeight = 24.dp,
            viewportWidth = 960f,
            viewportHeight = 960f
        ).apply {
            path(
                fill = SolidColor(Color(0xFFE3E3E3)),
                stroke = null,
                pathFillType = PathFillType.NonZero
            ) {
                moveTo(240f, 560f)
                quadTo(207f, 560f, 183.5f, 536.5f)
                quadTo(160f, 513f, 160f, 480f)
                quadTo(160f, 447f, 183.5f, 423.5f)
                quadTo(207f, 400f, 240f, 400f)
                quadTo(273f, 400f, 296.5f, 423.5f)
                quadTo(320f, 447f, 320f, 480f)
                quadTo(320f, 513f, 296.5f, 536.5f)
                quadTo(273f, 560f, 240f, 560f)

                moveTo(480f, 560f)
                quadTo(447f, 560f, 423.5f, 536.5f)
                quadTo(400f, 513f, 400f, 480f)
                quadTo(400f, 447f, 423.5f, 423.5f)
                quadTo(447f, 400f, 480f, 400f)
                quadTo(513f, 400f, 536.5f, 423.5f)
                quadTo(560f, 447f, 560f, 480f)
                quadTo(560f, 513f, 536.5f, 536.5f)
                quadTo(513f, 560f, 480f, 560f)

                moveTo(720f, 560f)
                quadTo(687f, 560f, 663.5f, 536.5f)
                quadTo(640f, 513f, 640f, 480f)
                quadTo(640f, 447f, 663.5f, 423.5f)
                quadTo(687f, 400f, 720f, 400f)
                quadTo(753f, 400f, 776.5f, 423.5f)
                quadTo(800f, 447f, 800f, 480f)
                quadTo(800f, 513f, 776.5f, 536.5f)
                quadTo(753f, 560f, 720f, 560f)
            }
        }.build()
        return _MoreHorizontal!!
    }

private var _MoreHorizontal: ImageVector? = null
