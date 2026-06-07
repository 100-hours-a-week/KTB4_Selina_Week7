package io.github.ysbunny.community.controller;

import io.github.ysbunny.community.dto.comment.CreateCommentRequest;
import io.github.ysbunny.community.dto.comment.CreateCommentResponse;
import io.github.ysbunny.community.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts/{postId}/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public CreateCommentResponse createComment(
            @PathVariable Long postId,
            @RequestBody CreateCommentRequest request
    ) {
        return commentService.createComment(request);
    }
}
