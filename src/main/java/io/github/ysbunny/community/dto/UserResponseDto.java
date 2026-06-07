package io.github.ysbunny.community.dto;

import lombok.Getter;

@Getter
public class UserResponseDto {
    private Long userId;
    private String email;
    private String nickname;
    private String profileImage;
    private String token;
}
