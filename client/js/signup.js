// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 회원가입 폼, 이메일 폼, 비밀번호 폼, 비밀번호 확인 폼, 닉네임 폼, 안내 문구들, 회원가입 버튼 가져옴
    const signupForm = document.querySelector("#signupForm");

    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const passwordConfirmInput = document.querySelector("#passwordConfirm");
    const nicknameInput = document.querySelector("#nickname");

    const emailHelperText = document.querySelector("#emailHelperText");
    const passwordHelperText = document.querySelector("#passwordHelperText");
    const passwordConfirmHelperText = document.querySelector("#passwordConfirmHelperText");
    const nicknameHelperText = document.querySelector("#nicknameHelperText");

    const signupButton = document.querySelector("#signupButton");

    signupForm.addEventListener("submit", function (event) {
        // 2. 회원가입 폼 제출 기본 동작 막음
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        const nickname = nicknameInput.value.trim();

        // 3. 이메일, 비밀번호, 비밀번호 확인, 닉네임 모두 입력됐으면 로그인 가능
        if (!(email === "" || password === "" || passwordConfirm === "" || nickname === "")) {
            // 4. 로그인 페이지로 이동
            window.location.href = `./login.html`;
        }
    });

    function checkPostForm() {
        // 3. 이메일, 비밀번호, 비밀번호 확인, 닉네임 모두 있으면 회원가입 버튼 활성화
        if (email !== "" && password !== "" && passwordConfirm !== "" && nickname !== "") {
            signupButton.disabled = false;
        } else {
            signupButton.disabled = true;
        }
    }

    emailInput.addEventListener("input", () => {
        // 2. 이메일 값, 비밀번호 값, 비밀번호 확인 값, 닉네임 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        const nickname = nicknameInput.value.trim();

        checkPostForm();

        // 4. 이메일 값 여부에 따라 안내 문구 여부 변경
        if (email === "") {
            emailHelperText.textContent = "* 이메일을 입력해주세요.";
        } else {
            emailHelperText.textContent = "";
        }
    });
    
    passwordInput.addEventListener("input", () => {
        // 2. 이메일 값, 비밀번호 값, 비밀번호 확인 값, 닉네임 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        const nickname = nicknameInput.value.trim();

        checkPostForm();

        // 4. 비밀번호 값 여부에 따라 안내 문구 여부 변경
        if (password === "") {
            passwordHelperText.textContent = "* 비밀번호을 입력해주세요.";
        } else {
            passwordHelperText.textContent = "";
        }
    });

    passwordConfirmInput.addEventListener("input", () => {
        // 2. 이메일 값, 비밀번호 값, 비밀번호 확인 값, 닉네임 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        const nickname = nicknameInput.value.trim();

        checkPostForm();

        // 4. 비밀번호 확인 값 여부에 따라 안내 문구 여부 변경
        if (passwordConfirm === "") {
            passwordConfirmHelperText.textContent = "* 비밀번호 확인을 입력해주세요.";
        } else {
            passwordConfirmHelperText.textContent = "";
        }
    });

    nicknameInput.addEventListener("input", () => {
         // 2. 이메일 값, 비밀번호 값, 비밀번호 확인 값, 닉네임 값 가져옴
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        const nickname = nicknameInput.value.trim();

        checkPostForm();

        // 4. 닉네임 값 여부에 따라 안내 문구 여부 변경
        if (nickname === "") {
            nicknameHelperText.textContent = "* 닉네임을 입력해주세요.";
        } else {
            nicknameHelperText.textContent = "";
        }
    });
    
    // 1. 로그인하러 가기 버튼 가져옴
    const loginButton = document.querySelector("#loginButton");

    // 2. 로그인하러 가기 버튼 클릭하면 로그인 페이지로 이동
    loginButton.addEventListener("click", () => {
        window.location.href = `./login.html`;
    });
});
