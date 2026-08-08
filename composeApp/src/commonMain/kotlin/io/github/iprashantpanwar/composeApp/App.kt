package io.github.iprashantpanwar.composeApp

import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import io.github.iprashantpanwar.composeApp.theme.JellyFabTheme
import org.jetbrains.compose.ui.tooling.preview.Preview

@Composable
@Preview
fun App() {
    JellyFabTheme {
        Scaffold(
            contentWindowInsets = WindowInsets.safeDrawing
        ) {
            ChatListScreen(
                modifier = Modifier
                    .fillMaxSize()
            )
        }
    }
}