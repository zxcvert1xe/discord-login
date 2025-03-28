document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Остановка стандартного поведения формы
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful! (Здесь можно отправить данные на сервер)");
    } else {
        alert("Please fill in all fields.");
    }
});
