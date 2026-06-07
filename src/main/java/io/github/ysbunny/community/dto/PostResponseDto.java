package io.github.ysbunny.community.dto;

import lombok.Getter;

@Getter
public class PostResponseDto {
    private Long postId;
    private String title;
    private String content;
    private String postImage;
    private Long userId;
}
