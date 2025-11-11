/*
 * JellyFab – A delightful, jelly-like floating action menu for Jetpack Compose
 * Author: Prashant Panwar (github.com/iprashantpanwar)
 * License: Apache 2.0
 */


package com.github.iprashantpanwar.sample

import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue

@Stable
class JellyFabState internal constructor(
    internal val expandedState: MutableState<Boolean>,
    internal val secondaryExpandedState: MutableState<Boolean>
) {
    /** Whether the primary jelly menu is expanded. */
    var expanded: Boolean by expandedState

    /** Whether the secondary (nested) jelly menu is expanded. */
    var secondaryExpanded: Boolean by secondaryExpandedState
}

/**
 * Creates and remembers a [JellyFabState] for controlling the open/closed state
 * of the JellyFab. Users may replace this with their own state to control it externally.
 */
@Composable
fun rememberJellyFabState(
    initialExpanded: Boolean = false, initialSecondaryExpanded: Boolean = false
): JellyFabState = remember {
    JellyFabState(
        expandedState = mutableStateOf(initialExpanded),
        secondaryExpandedState = mutableStateOf(if (initialExpanded) initialSecondaryExpanded else false) // Auto-correct invalid state:
    )
}
