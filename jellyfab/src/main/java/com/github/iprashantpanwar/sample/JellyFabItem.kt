/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */

package com.github.iprashantpanwar.sample

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.vector.ImageVector

@Immutable
@Stable
data class JellyFabItem(
    val icon: ImageVector,
    val onClick: () -> Unit = {},
)
