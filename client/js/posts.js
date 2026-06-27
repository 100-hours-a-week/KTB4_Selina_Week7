// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. html의 class="post-card"인 게시글 요소 가져옴
    const posts = document.querySelectorAll(".post-card");

    // 2. 게시글마다 이벤트 리스너 등록
    posts.forEach(function (post) {
        post.addEventListener("click", (event) => {
            // 3. event.currentTarget으로 클릭된 게시글을 가져오고, 해당 게시글의 postId도 가져옴
            const postId = event.currentTarget.dataset.postId;

            // 4. 가져온 postId를 post-detail.html로 넘김
            window.location.href = `./post-detail.html?postId=${postId}`;
        });
    });

    // 1. html의 id="writePostButton"인 게시글 요소 가져옴
    const writePostButton = document.querySelector("#writePostButton");

    // 2. 버튼에 이벤트 리스너 등록
    writePostButton.addEventListener("click", (event) => {
        // 3. 게시글 작성 페이지로 넘어감
        window.location.href = `./post-form.html`;
    })
});
