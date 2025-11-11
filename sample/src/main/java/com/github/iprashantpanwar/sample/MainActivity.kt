package com.github.iprashantpanwar.sample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.DateRange
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.Share
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.core.view.WindowCompat
import com.github.iprashantpanwar.sample.ui.theme.JellyFabTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        WindowCompat.setDecorFitsSystemWindows(window, false)
        setContent {
            JellyFabTheme {
                ChatListDemoScreen()
            }
        }
    }
}

@Preview(backgroundColor = android.graphics.Color.WHITE.toLong(), showBackground = true)
@Composable
fun DemoJellyFabScreen() {
    JellyFabTheme {
        Column(modifier = Modifier.fillMaxSize()) {
            JellyFab(
                primaryItems = listOf(
                    JellyFabItem(CloseIcon) {},
                    JellyFabItem(Icons.Default.Email) {},
                    JellyFabItem(Icons.Default.DateRange) {},
                ),
                secondaryItems = listOf(
                    JellyFabItem(Icons.Default.Edit) {},
                    JellyFabItem(Icons.Default.Share) {},
                    JellyFabItem(Icons.Default.Favorite) {},
                    JellyFabItem(Icons.Default.Settings) {}
                )
            )
        }
    }
}