package com.github.iprashantpanwar.sample

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.vectorResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.github.iprashantpanwar.sample.ui.theme.JellyFabTheme

@Composable
fun ChatListDemoScreen(
    modifier: Modifier = Modifier
) {
    val chats = remember {
        listOf(
            ChatPreview(
                name = "Selin Daria",
                message = "typing...",
                time = "12:32PM",
                avatar = R.drawable.avatar_1
            ),
            ChatPreview(
                name = "Parth Patel",
                message = "What are you doing tonight?",
                time = "12:35PM",
                avatar = R.drawable.avatar_2
            ),
            ChatPreview(
                name = "John Oliver",
                message = "Yes, it is really awesome!",
                time = "09:47PM",
                avatar = R.drawable.avatar_3
            ),
            ChatPreview(
                name = "Mary Jane",
                message = "Did you see?",
                time = "Yesterday",
                avatar = R.drawable.avatar_4
            ),
            ChatPreview(
                name = "Joseph William",
                message = "Hi! I'm sorry, I forgot about it.",
                time = "Yesterday",
                avatar = R.drawable.avatar_5
            ),
            ChatPreview(
                name = "Michael Darling",
                message = "Let's catchup tomorrow!",
                time = "08/06/26",
                avatar = R.drawable.avatar_6
            ),
            ChatPreview(
                name = "Marcus Santos",
                message = "Call Fred, he's waiting.",
                time = "08/06/25",
                avatar = R.drawable.avatar_7
            ),
            ChatPreview(
                name = "Mei Wong",
                message = "Hey! Call me back once free.",
                time = "08/06/26",
                avatar = R.drawable.avatar_8
            ),
            ChatPreview(
                name = "Min-seo",
                message = "That was fun.",
                time = "08/06/26",
                avatar = R.drawable.avatar_9
            ),
            ChatPreview(
                name = "Sebastián Rodríguez",
                message = "Let's hangout coming weekend.",
                time = "08/06/26",
                avatar = R.drawable.avatar_10
            ),
            ChatPreview(
                name = "Ada Gumede",
                message = "Yes, that was so cool.",
                time = "",
                avatar = R.drawable.avatar_11
            )
        )
    }

    val jellyState = rememberJellyFabState()

    Box(
        modifier = modifier
            .fillMaxSize()
            .windowInsetsPadding(WindowInsets.safeDrawing)
            .background(Color(0xFFFFFFFF)), // soft blue bg like reference
    ) {

        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.White)
        ) {

            Spacer(Modifier.height(24.dp))
            Text(
                text = "Messages",
                modifier = Modifier.align(Alignment.CenterHorizontally).padding(horizontal = 24.dp),
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF001A49)
            )

            Spacer(Modifier.height(16.dp))

            var searchText by remember { mutableStateOf("") }
            OutlinedTextField(
                value = searchText,
                onValueChange = { searchText = it },
                trailingIcon = {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_search), // Use painterResource
                        contentDescription = "Search Icon",
                        tint = Color(0xFF7D7E80)
                    )
                },
                placeholder = { Text("Search People", color = Color(0xFF848686)) },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 24.dp),
                shape = RoundedCornerShape(24.dp),
                colors = TextFieldDefaults.colors(
                    focusedContainerColor = Color(0xFFF4F7FF),
                    unfocusedContainerColor = Color(0xFFF4F7FF),
                    focusedIndicatorColor = Color.Transparent,
                    unfocusedIndicatorColor = Color.Transparent,
                    cursorColor = Color(0xFF333030)
                )
            )

            Spacer(Modifier.height(8.dp))

            LazyColumn(
                modifier = Modifier.fillMaxSize(),
                contentPadding = PaddingValues(vertical = 16.dp)
            ) {
                items(chats) { chat ->
                    ChatRow(chat)
                }
            }
        }

        // ---------- Jelly Fab ----------
        JellyFab(
            state = jellyState,
            primaryItems = listOf(
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_more_horizontal)) {},
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_message)) {},
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_apps)) {},
            ),
            secondaryItems = listOf(
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_settings)) {},
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_folder)) {},
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_mail)) {},
                JellyFabItem(ImageVector.vectorResource(R.drawable.ic_paper_plane)) {},
            )
        )
    }
}


@Preview(backgroundColor = android.graphics.Color.WHITE.toLong(), showBackground = true)
@Composable
fun DemoMessageScreen() {
    JellyFabTheme {
        ChatListDemoScreen()
    }
}
