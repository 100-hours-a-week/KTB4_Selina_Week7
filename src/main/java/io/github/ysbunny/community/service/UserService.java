package io.github.ysbunny.community.service;

import io.github.ysbunny.community.dto.user.*;
import io.github.ysbunny.community.entity.User;
import io.github.ysbunny.community.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
    private final UserRepository userRepository;
    private String loginToken;

    @Transactional
    public User createUser(CreateUserRequest request) {
        User user = new User(
                request.getEmail(),
                request.getPassword(),
                request.getNickname(),
                request.getProfileImage()
        );
        return userRepository.save(user);
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("user not found"));
    }

    public User getReferenceById(Long id) {
        return userRepository.getReferenceById(id);
    }

//    public User login(LoginUserRequest request) {
//        if (user == null) {
//            throw new IllegalArgumentException("invalid_request");
//        }
//        if (!user.getEmail().equals(request.getEmail())) {
//            throw new IllegalArgumentException("email does not exist");
//        }
//        if (!user.getPassword().equals(request.getPassword())) {
//            throw new IllegalArgumentException("password does not match");
//        }
//
//        loginToken = "qwertyuiopasdfghjklzxcvbnm";
//        return new LoginUserResponse(user.getUserId(), loginToken);
//    }

    @Transactional
    public User updateUser(Long id, UpdateUserRequest request) {
        User user = findById(id);
        if (request.getPassword() != null) {
            user.changePassword(request.getPassword());
        }
        if (request.getNickname() != null) {
            user.changeNickname(request.getNickname());
        }
        if (request.getProfileImage() != null) {
            user.changeProfileImage(request.getProfileImage());
        }
        return user;
    }

//    public LogoutUserResponse logout(LogoutUserRequest request) {
//        if (loginToken == null || !loginToken.equals(request.getToken())) {
//            throw new IllegalArgumentException("unauthenticated user");
//        }
//
//        loginToken = null;
//        return new LogoutUserResponse("logout_success");
//    }

    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
