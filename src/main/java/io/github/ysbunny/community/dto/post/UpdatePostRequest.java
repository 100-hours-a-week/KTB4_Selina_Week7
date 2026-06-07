package io.github.ysbunny.community.dto.post;

import lombok.Getter;

@Getter
public class UpdatePostRequest {
    private String title;
    private String content;
    private String postImage;
}
