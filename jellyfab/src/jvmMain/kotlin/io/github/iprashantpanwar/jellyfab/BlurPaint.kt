package io.github.iprashantpanwar.jellyfab

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Paint
import androidx.compose.ui.graphics.PaintingStyle
import org.jetbrains.skia.FilterBlurMode
import org.jetbrains.skia.MaskFilter

actual fun createBlurPaint(color: Color, radius: Float): Paint {
    return Paint().apply {
        this.color = color
        isAntiAlias = false
        style = PaintingStyle.Fill
        asFrameworkPaint().maskFilter = MaskFilter.makeBlur(
            mode = FilterBlurMode.NORMAL,
            sigma = radius,
            respectCTM = true
        )
    }
}
