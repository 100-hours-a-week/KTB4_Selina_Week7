import { getPosts } from './api/postApi.js';

// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", async function () {
    const postList = document.querySelector("#postList");

    try {
        const result = await getPosts();
        const posts = result.posts;

        console.log("게시글 목록 응답:", posts);

        posts.forEach((post) => {
            const article = document.createElement("article");
            article.classList.add("post-card");
            article.dataset.postId = post.postId;

            const content = document.createElement("div");
            content.classList.add("post-card__content");

            const top = document.createElement("div");
            top.classList.add("post-card__top");

            const titleArea = document.createElement("div");

            const title = document.createElement("h2");
            title.classList.add("post-card__title");
            title.textContent = post.title;

            const meta = document.createElement("div");
            meta.classList.add("post-card__meta");

            const like = document.createElement("span");
            like.textContent = "좋아요 0";

            const comment = document.createElement("span");
            comment.textContent = "댓글 0";

            const view = document.createElement("span");
            view.textContent = "조회수 0";

            meta.appendChild(like);
            meta.appendChild(comment);
            meta.appendChild(view);

            titleArea.appendChild(title);
            titleArea.appendChild(meta);

            const date = document.createElement("time");
            date.classList.add("post-card__date");
            date.textContent = "2021-01-01 00:00:00";

            top.appendChild(titleArea);
            top.appendChild(date);

            content.appendChild(top);

            const author = document.createElement("div");
            author.classList.add("post-card__author");

            const authorProfile = document.createElement("div");
            authorProfile.classList.add("author-profile");

            const authorName = document.createElement("span");
            authorName.classList.add("author-name");
            authorName.textContent = "더미 작성자 1";

            author.appendChild(authorProfile);
            author.appendChild(authorName);

            article.appendChild(content);
            article.appendChild(author);

            postList.appendChild(article);
        });
    } catch (error) {
        alert(error.message);
    }

    postList.addEventListener("click", (event) => {
        const postCard = event.target.closest(".post-card");

        if (!postCard) {
            return;
        }

        const postId = postCard.dataset.postId;

        window.location.href = `./post-detail.html?postId=${postId}`;
    });

    // 1. html의 id="writePostButton"인 게시글 요소 가져옴
    const writePostButton = document.querySelector("#writePostButton");

    // 2. 버튼에 이벤트 리스너 등록
    writePostButton.addEventListener("click", (event) => {
        // 3. 게시글 작성 페이지로 넘어감
        window.location.href = `./post-form.html`;
    })
});
