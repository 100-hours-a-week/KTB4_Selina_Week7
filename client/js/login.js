// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 로그인 폼, 이메일 폼, 비밀번호 폼, 안내 문구들, 로그인 버튼 가져옴
    const loginForm = document.querySelector("#loginForm");

    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const emailHelperText = document.querySelector("#emailHelperText");
    const passwordHelperText = document.querySelector("#passwordHelperText");

    const loginButton = document.querySelector("#loginButton");

    loginForm.addEventListener("submit", (event) => {
        // 2. 로그인 폼 제출 기본 동작 막음
        event.preventDefault();

        // 3. 이메일 값, 비밀번호 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. 이메일과 비밀번호 모두 값이 있을 때 로그인되어 게시글 목록으로 이동
        if (email !== "" && password !== "") {
            window.location.href = `./posts.html`;
        }
    });

    emailInput.addEventListener("input", () => {
        // 2. 이메일 값, 비밀번호 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // 3. 이메일 값 여부에 따라 안내 문구 여부 변경
        if (email === "") {
            emailHelperText.textContent = "* 이메일을 입력해주세요.";
        } else {
            emailHelperText.textContent = "";
        }

        // 4. 이메일과 비밀번호 값 둘 다 있으면 로그인 버튼 활성화
        if (email !== "" && password !== "") {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    });

    passwordInput.addEventListener("input", () => {
        // 2. 이메일 값, 비밀번호 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 3. 비밀번호 값 여부에 따라 안내 문구 여부 변경
        if (password === "") {
            passwordHelperText.textContent = "* 비밀번호를 입력해주세요.";
        } else {
            passwordHelperText.textContent = "";
        }

        // 4. 이메일과 비밀번호 값 둘 다 있으면 로그인 버튼 활성화
        if (email !== "" && password !== "") {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    });

    // 1. 회원가입 버튼 가져옴
    const signupButton = document.querySelector("#signupButton");

    signupButton.addEventListener("click", function () {
        // 2. 회원가입 페이지로 이동
        window.location.href = `./signup.html`;
    });
});
