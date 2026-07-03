import { createPost } from "./api/postApi.js";

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

    // 1. 게시글 폼, 제목 폼, 내용 폼, 안내 문구 가져옴
    const postForm = document.querySelector("#postForm");
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const postImage = document.querySelector("#postImage");
    const helperText = document.querySelector("#helperText");

    // 입력 폼이 포커스 되었었는지
    let isTitleFocused = false;
    let isContentFocused = false;

    postForm.addEventListener("submit", async (event) => {
        // 2. 게시글 작성 폼 제출 기본 동작 막음
        event.preventDefault();

        const postData = {
            title: titleInput.value.trim(),
            content: contentInput.value.trim(),
            postImage: postImage.value
        };

        // 4. 제목, 내용 모두 입력되어서 폼 제출 가능
        if (postData.title !== "" && postData.content !== "") {
            const result = await createPost(postData);

            console.log(result);

            localStorage.setItem("postId", result.postId);
            
            const postId = localStorage.getItem("postId");

            location.href = `./posts.html`;
        }
    });

    function checkPostForm() {
        // 2. 제목 값, 내용 값 가져옴
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        // 3. 제목 폼, 내용 폼이 모두 입력되었었는데 둘 중 하나라도 값이 비면 안내 문구 띄움
        if (isTitleFocused && isContentFocused && (title === "" || content === "")) {
            helperText.textContent = "* 제목, 내용을 모두 작성해주세요.";
        }

        // 4. 제목과 내용 모두 작성 되었으면 제출 버튼 보이게, 하나라도 작성 안 되어있으면 제출 버튼 안 보이게 함
        if (title !== "" && content !== "") {
            helperText.textContent = "";
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    titleInput.addEventListener("input", () => {
        // 제목 폼이 최소 한 번 입력됨
        isTitleFocused = true;

        checkPostForm()
    });

    contentInput.addEventListener("input", () => {
        // 내용 폼이 최소 한 번 입력됨
        isContentFocused = true;
        
        checkPostForm()
    });
});
