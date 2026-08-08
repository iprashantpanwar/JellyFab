package io.github.iprashantpanwar.composeApp

import androidx.compose.ui.window.ComposeUIViewController
import platform.UIKit.UIViewController
import platform.UIKit.UIColor

fun mainViewController(): UIViewController = ComposeUIViewController {
    App()
}.apply {
    view.backgroundColor = UIColor.whiteColor
}
