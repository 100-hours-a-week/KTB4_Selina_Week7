package io.github.ysbunny.community.dto.post;

import lombok.Getter;

@Getter
public class CreatePostRequest {
    private String title;
    private String content;
    private String postImage;
}
