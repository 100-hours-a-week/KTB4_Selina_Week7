package io.github.ysbunny.community.controller;

import io.github.ysbunny.community.dto.user.*;
import io.github.ysbunny.community.entity.User;
import io.github.ysbunny.community.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/sign-up")
    public CreateUserResponse createUser(@Valid @RequestBody CreateUserRequest request) {
        User saved = userService.createUser(request);
        return new CreateUserResponse(saved.getId());
    }

    @PostMapping("/log-in")
    public LoginUserResponse logIn(@Valid @RequestBody LoginUserRequest request) {
        return userService.login(request);
    }

    @PatchMapping("/{userId}")
    public UpdateUserResponse updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request
    ) {
        User updated = userService.updateUser(id, request);
        return new UpdateUserResponse(updated.getNickname(), updated.getProfileImage());
    }

    @PostMapping("/log-out")
    public LogoutUserResponse logout(@Valid @RequestBody LogoutUserRequest request) {
        return userService.logout(request);
    }

    @DeleteMapping("/{userId}")
    public DeleteUserResponse deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return new DeleteUserResponse("withdraw_success");
    }
}
