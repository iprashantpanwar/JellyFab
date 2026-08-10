package io.github.iprashantpanwar.composeApp

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.jetbrains.compose.resources.painterResource

@Composable
internal fun ChatRow(
    modifier: Modifier = Modifier,
    item: ChatPreview
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .clickable {}
            .padding(horizontal = 24.dp, vertical = 12.dp),
    ) {
        Image(
            painter = painterResource(item.avatar),
            contentDescription = item.name,
            modifier = Modifier
                .size(48.dp)
                .clip(CircleShape),
            contentScale = ContentScale.Crop
        )

        Spacer(Modifier.width(12.dp))

        Column(modifier = Modifier.weight(1f)) {
            Text(item.name, fontSize = 16.sp, color = Color(0xFF002054))
            Text(item.message, fontSize = 14.sp, color = Color(0xFF7B88A8))
        }

        Text(
            item.time,
            fontSize = 12.sp,
            color = Color(0xFF7B88A8),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}
