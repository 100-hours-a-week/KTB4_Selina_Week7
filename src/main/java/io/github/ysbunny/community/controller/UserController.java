package io.github.ysbunny.community.controller;

import io.github.ysbunny.community.dto.user.*;
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
        return userService.createUser(request);
    }

    @PostMapping("/log-in")
    public LoginUserResponse logIn(@Valid @RequestBody LoginUserRequest request) {
        return userService.login(request);
    }

    @PatchMapping("/{userId}")
    public UpdateUserResponse updateUser(
            @PathVariable Long userId,
            @Valid @RequestBody UpdateUserRequest request
    ) {
        return userService.updateUser(userId, request);
    }

    @PostMapping("/log-out")
    public LogoutUserResponse logout(@Valid @RequestBody LogoutUserRequest request) {
        return userService.logout(request);
    }

    @DeleteMapping("/{userId}")
    public DeleteUserResponse deleteUser(@PathVariable Long userId) {
        return userService.deleteUser(userId);
    }
}
