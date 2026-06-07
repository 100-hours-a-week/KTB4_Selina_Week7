package io.github.ysbunny.community.dto.user;

import lombok.Getter;

@Getter
public class UpdateUserRequest {
    private String password;
    private String nickname;
    private String profileImage;
}
