package io.github.ysbunny.community.dto;

import lombok.Getter;

@Getter
public class PostRequestDto {
    private String title;
    private String content;
    private String postImage;
    private Long userId;
}
