package io.github.iprashantpanwar.composeApp

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import io.github.iprashantpanwar.composeApp.theme.JellyFabTheme
import io.github.iprashantpanwar.jellyfab.JellyFab
import io.github.iprashantpanwar.jellyfab.JellyFabItem
import io.github.iprashantpanwar.jellyfab.rememberJellyFabState
import jellyfab.composeapp.generated.resources.Res
import jellyfab.composeapp.generated.resources.avatar_1
import jellyfab.composeapp.generated.resources.avatar_10
import jellyfab.composeapp.generated.resources.avatar_11
import jellyfab.composeapp.generated.resources.avatar_2
import jellyfab.composeapp.generated.resources.avatar_3
import jellyfab.composeapp.generated.resources.avatar_4
import jellyfab.composeapp.generated.resources.avatar_5
import jellyfab.composeapp.generated.resources.avatar_6
import jellyfab.composeapp.generated.resources.avatar_7
import jellyfab.composeapp.generated.resources.avatar_8
import jellyfab.composeapp.generated.resources.avatar_9
import jellyfab.composeapp.generated.resources.ic_apps
import jellyfab.composeapp.generated.resources.ic_folder
import jellyfab.composeapp.generated.resources.ic_mail
import jellyfab.composeapp.generated.resources.ic_message
import jellyfab.composeapp.generated.resources.ic_more_horizontal
import jellyfab.composeapp.generated.resources.ic_paper_plane
import jellyfab.composeapp.generated.resources.ic_search
import jellyfab.composeapp.generated.resources.ic_settings
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.vectorResource
import org.jetbrains.compose.ui.tooling.preview.Preview

private val chats = listOf(
    ChatPreview(
        name = "Selin Daria",
        message = "typing...",
        time = "12:32PM",
        avatar = Res.drawable.avatar_1
    ),
    ChatPreview(
        name = "Parth Patel",
        message = "What are you doing tonight?",
        time = "12:35PM",
        avatar = Res.drawable.avatar_2
    ),
    ChatPreview(
        name = "John Oliver",
        message = "Yes, it is really awesome!",
        time = "09:47PM",
        avatar = Res.drawable.avatar_3
    ),
    ChatPreview(
        name = "Mary Jane",
        message = "Did you see?",
        time = "Yesterday",
        avatar = Res.drawable.avatar_4
    ),
    ChatPreview(
        name = "Joseph William",
        message = "Hi! I'm sorry, I forgot about it.",
        time = "Yesterday",
        avatar = Res.drawable.avatar_5
    ),
    ChatPreview(
        name = "Michael Darling",
        message = "Let's catchup tomorrow!",
        time = "08/06/26",
        avatar = Res.drawable.avatar_6
    ),
    ChatPreview(
        name = "Marcus Santos",
        message = "Call Fred, he's waiting.",
        time = "08/06/25",
        avatar = Res.drawable.avatar_7
    ),
    ChatPreview(
        name = "Mei Wong",
        message = "Hey! Call me back once free.",
        time = "08/06/26",
        avatar = Res.drawable.avatar_8
    ),
    ChatPreview(
        name = "Min-seo",
        message = "That was fun.",
        time = "08/06/26",
        avatar = Res.drawable.avatar_9
    ),
    ChatPreview(
        name = "Sebastián Rodríguez",
        message = "Let's hangout coming weekend.",
        time = "08/06/26",
        avatar = Res.drawable.avatar_10
    ),
    ChatPreview(
        name = "Ada Gumede",
        message = "Yes, that was so cool.",
        time = "08/06/26",
        avatar = Res.drawable.avatar_11
    )
)

@Composable
fun ChatListScreen(
    modifier: Modifier = Modifier,
) {
    var searchText by rememberSaveable { mutableStateOf("") }
    val filteredChats = remember(searchText) {
        if (searchText.isBlank()) {
            chats
        } else {
            chats.filter { chat ->
                chat.name.contains(searchText, ignoreCase = true)
            }
        }
    }

    val primaryLayer = listOf(
        JellyFabItem(vectorResource(Res.drawable.ic_more_horizontal)) {},
        JellyFabItem(vectorResource(Res.drawable.ic_message)) {},
        JellyFabItem(vectorResource(Res.drawable.ic_apps)) {},
    )

    val secondaryLayer = listOf(
        JellyFabItem(vectorResource(Res.drawable.ic_settings)) {},
        JellyFabItem(vectorResource(Res.drawable.ic_folder)) {},
        JellyFabItem(vectorResource(Res.drawable.ic_mail)) {},
        JellyFabItem(vectorResource(Res.drawable.ic_paper_plane)) {},
    )

    val primaryItems = remember { primaryLayer }
    val secondaryItems = remember { secondaryLayer }
    val jellyState = rememberJellyFabState()

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(Color.White)
    ) {
        Column(
            modifier = Modifier.fillMaxSize()
        ) {

            MessagesHeader()

            SearchBar(
                value = searchText,
                onValueChange = { searchText = it }
            )

            Spacer(Modifier.height(8.dp))

            LazyColumn(
                modifier = Modifier.weight(1f)
            ) {
                items(
                    items = filteredChats,
                    key = { it.name }
                ) { chat ->
                    ChatRow(item = chat)
                }
            }
        }

        JellyFab(
            state = jellyState,
            primaryItems = primaryItems,
            secondaryItems = secondaryItems
        )
    }
}

@Composable
private fun MessagesHeader() {
    Spacer(Modifier.height(24.dp))

    Text(
        text = "Messages",
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp),
        textAlign = TextAlign.Center,
        fontSize = 24.sp,
        fontWeight = FontWeight.Bold,
        color = Color(0xFF001A49)
    )

    Spacer(Modifier.height(16.dp))
}

@Composable
private fun SearchBar(
    value: String,
    onValueChange: (String) -> Unit,
) {
    val focusManager = LocalFocusManager.current
    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp),
        trailingIcon = {
            Icon(
                painter = painterResource(Res.drawable.ic_search),
                contentDescription = null,
                tint = Color(0xFF7D7E80)
            )
        },
        placeholder = {
            Text(
                "Search People",
                color = Color(0xFF616161)
            )
        },
        shape = RoundedCornerShape(24.dp),
        singleLine = true,
        colors = TextFieldDefaults.colors(
            focusedContainerColor = Color(0xFFF4F7FF),
            unfocusedContainerColor = Color(0xFFF4F7FF),
            focusedIndicatorColor = Color.Transparent,
            unfocusedIndicatorColor = Color.Transparent,
            cursorColor = Color(0xFF2F2E2E),
            focusedTextColor = Color(0xFF070707),
            unfocusedTextColor = Color(0xFF616161)
        ),
        keyboardActions = KeyboardActions(
            onSearch = {
                focusManager.clearFocus()
            }
        ),
    )
}

@Preview
@Composable
fun DemoMessageScreen() {
    JellyFabTheme {
        ChatListScreen()
    }
}
