// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. html의 class="post-card"인 게시글 요소 가져옴
    const posts = document.querySelectorAll(".post-card");

    // 2. 게시글마다 이벤트 리스너 등록
    posts.forEach(function (post) {
        post.addEventListener("click", () => {
            // 3. html의 data-post-id="1"을 요소.dataset.postId로 가져옴
            const postId = post.dataset.postId;

            // 4. 가져온 postId를 post-detail.html로 넘김
            window.location.href = `./post-detail.html?postId=${postId}`;
        });
    });
});
