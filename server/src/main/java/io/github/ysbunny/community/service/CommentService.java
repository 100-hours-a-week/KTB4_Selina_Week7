package io.github.ysbunny.community.service;

import io.github.ysbunny.community.dto.comment.CreateCommentRequest;
import io.github.ysbunny.community.dto.comment.CreateCommentResponse;
import io.github.ysbunny.community.dto.comment.DeleteCommentResponse;
import io.github.ysbunny.community.entity.Comment;
import io.github.ysbunny.community.entity.Post;
import io.github.ysbunny.community.entity.User;
import io.github.ysbunny.community.repository.CommentRepository;
import io.github.ysbunny.community.repository.PostRepository;
import io.github.ysbunny.community.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommentService {
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    @Transactional
    public CreateCommentResponse createComment(
            String loginToken,
            Long postId,
            CreateCommentRequest request
    ) {
        User author = userRepository.findByLoginToken(loginToken)
                .orElseThrow(() -> new IllegalArgumentException("unauthenticated user"));

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("post does not exist"));

        Comment comment = new Comment(
                request.getComment(),
                author,
                post
        );

        Comment savedComment = commentRepository.save(comment);

        return new CreateCommentResponse(savedComment.getId());
    }

    @Transactional
    public DeleteCommentResponse deleteComment(String loginToken, Long postId, Long commentId) {
        User user = userRepository.findByLoginToken(loginToken)
                .orElseThrow(() -> new IllegalArgumentException("unauthenticated user"));

        postRepository.findById(postId).orElseThrow(() -> new IllegalArgumentException("post does not exist"));

        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("comment does not exist"));

        if (user != comment.getAuthor()) {
            throw new IllegalArgumentException("unauthorized user");
        }

        commentRepository.deleteById(commentId);

        return new DeleteCommentResponse("delete_success");
    }
}
