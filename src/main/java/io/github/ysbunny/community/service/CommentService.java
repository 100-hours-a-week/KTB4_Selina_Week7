package io.github.ysbunny.community.service;

import io.github.ysbunny.community.domain.Comment;
import io.github.ysbunny.community.dto.comment.CreateCommentRequest;
import io.github.ysbunny.community.dto.comment.CreateCommentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
@RequiredArgsConstructor
public class CommentService {

    private Comment comment;

    public CreateCommentResponse createComment(CreateCommentRequest request) {
        comment = new Comment(
                1L,
                request.getComment()
        );
        return new CreateCommentResponse(comment.getCommentId());
    }
}
