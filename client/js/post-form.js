// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. URL 파라미터 가져옴
    const params = new URLSearchParams(window.location.search);

    // 2. postID 값과 mode 값 가져옴
    const postId = params.get("postId");
    const mode = params.get("mode");

    // 3. 폼 제목과 제출 버튼 문구 가져옴
    const formTitle = document.querySelector("#formTitle");
    const submitButton = document.querySelector("#submitButton");

    // 수정 모드라면 폼 제목과 버튼 문구 수정하고 해당 게시글 데이터 불러오기
    if (mode === "edit") {
        formTitle.textContent = "게시글 수정";
        submitButton.textContent = "수정하기";

        // 해당 게시글 데이터 불러오는 로직 나중에 추가
    }

    // 1. 게시글 폼, 제목, 내용, 안내 문구 가져옴
    const postForm = document.querySelector("#postForm");
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const helperText = document.querySelector("#helperText");

    postForm.addEventListener("submit", (event) => {
        // 2. 게시글 작성 폼 제출 기본 동작 막음
        event.preventDefault();

        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        // 3. 안내 문구가 처음에는 없고 제목이나 내용 값이 비면 생김
        helperText.textContent = "";

        if (title === "" || content === "") {
            helperText.textContent = "* 제목, 내용을 모두 작성해주세요.";

            // 4. 게시글 작성 막음
            return;
        }

        console.log("게시글 작성 가능");
        console.log("제목:", title);
        console.log("내용:", content);
        
        // 해당 게시글 데이터 업데이트 로직 나중에 추가
    });
});
