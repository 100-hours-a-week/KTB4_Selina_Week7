package io.github.ysbunny.community.dto;

import lombok.Getter;

@Getter
public class UserRequestDto {

    private String email;
    private String password;
    private String nickname;
    private String profileImage;
}
