package io.github.ysbunny.community.domain;

import lombok.Getter;

@Getter
public class User {

    private final Long userId;
    private final String email;
    private String password;
    private String nickname;
    private String profileImage;

    public User(Long userId, String email, String password, String nickname, String profileImage) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.profileImage = profileImage;
    }

    public void updatePassword(String password) {
        this.password = password;
    }

    public void updateNickname(String nickname) {
        this.nickname = nickname;
    }

    public void updateProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
}
