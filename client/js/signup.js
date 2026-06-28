// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 회원가입 폼 가져옴
    const signupForm = document.querySelector("#signupForm");

    signupForm.addEventListener("submit", function (event) {
        // 2. 회원가입 폼 제출 기본 동작 막음
        event.preventDefault();
    
        // 1. 이메일, 비밀번호, 비밀번호 확인, 닉네임 가져옴
        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");
        const passwordConfirmInput = document.querySelector("#passwordConfirm");
        const nicknameInput = document.querySelector("#nickname");

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        const nickname = nicknameInput.value.trim();

        // 2. 이메일 값 입력할 때마다 검사
        emailInput.addEventListener("input", () => {
            
        });
        
        // 2. 비밀번호 값 입력할 때마다 검사
        passwordInput.addEventListener("input", () => {
            
        });

        // 2. 비밀번호 확인 값 입력할 때마다 검사
        passwordConfirmInput.addEventListener("input", () => {
            
        });

        // 2. 닉네임 값 입력할 때마다 검사
        nicknameInput.addEventListener("input", () => {
            
        });
        
        // 3. 이메일, 비밀번호, 비밀번호 확인, 닉네임 모두 입력됐으면 로그인 가능
        if (!(email === "" || password === "" || passwordConfirm === "" || nickname === "")) {
            // 4. 로그인 페이지로 이동
            window.location.href = `./login.html`;
        }
    });
    
    // 1. 로그인하러 가기 버튼 가져옴
    const loginButton = document.querySelector("#loginButton");

    // 2. 로그인하러 가기 버튼 클릭하면 로그인 페이지로 이동
    loginButton.addEventListener("click", () => {
        window.location.href = `./login.html`;
    });
});
