package io.github.ysbunny.community.controller;

import io.github.ysbunny.community.dto.post.*;
import io.github.ysbunny.community.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public CreatePostResponse createPost(
            @RequestHeader("Authorization") String authorizationHeader,
            @Valid @RequestBody CreatePostRequest request
    ) {
        String loginToken = authorizationHeader.replace("Bearer ", "");

        Long postId = postService.createPost(loginToken, request);

        return new CreatePostResponse(postId);
    }

//    @GetMapping
//    public PostListResponse getPostList() {
//        return postService.getPostList();
//    }
//
//    @GetMapping("/{postId}")
//    public PostDetailResponse getPost(@PathVariable Long postId) {
//        return postService.getPost(postId);
//    }
//
//    @PutMapping("/{postId}")
//    public UpdatePostResponse updatePost(
//            @PathVariable Long postId,
//            @Valid @RequestBody UpdatePostRequest request
//    ) {
//        return postService.updatePost(postId, request);
//    }
//
//    @DeleteMapping("/{postId}")
//    public DeletePostResponse deletePost(@PathVariable Long postId) {
//        return postService.deletePost(postId);
//    }
}
