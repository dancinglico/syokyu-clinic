document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // 入力されたユーザー名とパスワードを取得
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 認証情報を設定
    const validUsername = "lico";
    const validPassword = "1234";

    // 認証チェック
    if (username === validUsername && password === validPassword) {
        
        document.getElementById("auth-overlay").classList.add("hidden");

    } else {
        // 認証失敗時のエラーメッセージ表示
        document.getElementById("error-message").classList.remove("hidden");
    }
});