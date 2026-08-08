package io.github.iprashantpanwar.jellyfab

import android.graphics.BlurMaskFilter
import androidx.compose.ui.graphics.AndroidPaint
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Paint

actual fun createBlurPaint(color: Color, radius: Float): Paint {
    return AndroidPaint().apply {
        this.color = color
        asFrameworkPaint().apply {
            isAntiAlias = false
            style = android.graphics.Paint.Style.FILL
            maskFilter = BlurMaskFilter(
                radius,
                BlurMaskFilter.Blur.NORMAL
            )
        }
    }
}
