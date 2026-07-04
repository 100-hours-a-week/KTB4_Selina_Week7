package io.github.ysbunny.community.controller;

import io.github.ysbunny.community.dto.comment.*;
import io.github.ysbunny.community.service.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts/{postId}/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public CreateCommentResponse createComment(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable Long postId,
            @Valid @RequestBody CreateCommentRequest request
    ) {
        String loginToken = authorizationHeader.replace("Bearer ", "");

        return commentService.createComment(loginToken, postId, request);
    }

    @GetMapping
    public CommentListResponse getCommentList(@PathVariable Long postId) {
        return commentService.getCommentList(postId);
    }

    @PatchMapping("/{commentId}")
    public UpdateCommentResponse updateComment(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable Long postId,
            @PathVariable Long commentId,
            @Valid @RequestBody UpdateCommentRequest request
    ) {
        String loginToken = authorizationHeader.replace("Bearer ", "");

        return  commentService.updateComment(loginToken, postId, commentId, request);
    }

    @DeleteMapping("/{commentId}")
    public DeleteCommentResponse deleteComment(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable Long postId,
            @PathVariable Long commentId
    ) {
        String loginToken = authorizationHeader.replace("Bearer ", "");

        return commentService.deleteComment(loginToken, postId, commentId);
    }
}
