// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 로그인 폼 가져옴
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", function (event) {
        // 2. 로그인 폼 제출 기본 동작 막음
        event.preventDefault();

        // 3. 이메일 값, 비밀번호 값, 안내 문구들 가져오기
        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        const emailHelperText = document.querySelector("#emailHelperText");
        const passwordHelperText = document.querySelector("#passwordHelperText");

        // 4. 이메일 값 입력할 때마다 검사
        emailInput.addEventListener("input", () => {
            // 5. 값이 없으면 emailHelperText 안내 문구 띄움
            // if (email === "") {
            //     emailHelperText.textContent = "* 이메일을 입력해주세요.";
            // } else {
            //     emailHelperText.textContent = "";
            // }

            // 이메일 검증 로직
        });

        // 4. 비밀번호 값 입력할 때마다 검사
        passwordInput.addEventListener("input", () => {
            // 5. 값이 없으면 passwordHelperText 안내 문구 띄움
            // if (password === "") {
            //     passwordHelperText.textContent = "* 비밀번호를 입력해주세요.";
            // } else {
            //     passwordHelperText.textContent = "";
            // }

            // 비밀번호 검증 로직
        });

        // 6. 이메일, 비밀번호 둘 다 입력되면 로그인에 이벤트 리스너 등록
        if (!(email === "" || password === "")) {
            const loginButton = document.querySelector("#loginButton");

            loginButton.addEventListener("click", () => {
                // 7. 게시글 목록 페이지로 이동
                window.location.href = `./posts.html`;
            });
        }
    });
});
