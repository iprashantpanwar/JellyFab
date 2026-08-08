package io.github.iprashantpanwar.composeApp

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import org.jetbrains.compose.resources.DrawableResource

@Stable
@Immutable
data class ChatPreview(
    val name: String,
    val message: String,
    val time: String,
    val avatar: DrawableResource
)
