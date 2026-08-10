package io.github.iprashantpanwar.jellyfab

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Paint

expect fun createBlurPaint(
    color: Color,
    radius: Float
): Paint
