package io.github.ysbunny.community.service;

import io.github.ysbunny.community.domain.User;
import io.github.ysbunny.community.dto.user.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private User user;
    private String loginToken;

    public CreateUserResponse createUser(CreateUserRequest request) {
        user = new User(
                1L,
                request.getEmail(),
                request.getPassword(),
                request.getNickname(),
                request.getProfileImage()
        );
        return new CreateUserResponse(user.getUserId());
    }

    public LoginUserResponse login(LoginUserRequest request) {
        if (user == null) {
            throw new IllegalArgumentException("invalid_request");
        }
        if (!user.getEmail().equals(request.getEmail())) {
            throw new IllegalArgumentException("email does not exist");
        }
        if (!user.getPassword().equals(request.getPassword())) {
            throw new IllegalArgumentException("password does not match");
        }

        loginToken = "qwertyuiopasdfghjklzxcvbnm";
        return new LoginUserResponse(user.getUserId(), loginToken);
    }

    public UpdateUserResponse updateUser(Long userId, UpdateUserRequest request) {
        if (request.getPassword() != null) {
            user.updatePassword(request.getPassword());
        }
        if (request.getNickname() != null) {
            user.updateNickname(request.getNickname());
        }
        if (request.getProfileImage() != null) {
            user.updateProfileImage(request.getProfileImage());
        }
        return new UpdateUserResponse(user.getNickname(), user.getProfileImage());
    }

    public LogoutUserResponse logout(LogoutUserRequest request) {
        if (loginToken == null || !loginToken.equals(request.getToken())) {
            throw new IllegalArgumentException("unauthenticated user");
        }

        loginToken = null;
        return new LogoutUserResponse("logout_success");
    }

    public DeleteUserResponse deleteUser(Long userId) {
        user = null;
        return new DeleteUserResponse("withdraw_success");
    }
}
