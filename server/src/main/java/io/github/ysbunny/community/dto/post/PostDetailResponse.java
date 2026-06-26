package io.github.ysbunny.community.dto.post;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostDetailResponse {
    private String title;
    private String content;
    private String postImage;
}
