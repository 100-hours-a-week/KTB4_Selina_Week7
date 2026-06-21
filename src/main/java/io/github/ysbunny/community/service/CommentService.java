package io.github.ysbunny.community.service;

import io.github.ysbunny.community.dto.comment.CreateCommentRequest;
import io.github.ysbunny.community.dto.comment.CreateCommentResponse;
import io.github.ysbunny.community.entity.Comment;
import io.github.ysbunny.community.entity.Post;
import io.github.ysbunny.community.entity.User;
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

        return new CreateCommentResponse(comment.getId());
    }
}
