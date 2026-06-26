package io.github.ysbunny.community.dto.post;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostListItemResponse {
    private Long postId;
    private String title;
}
