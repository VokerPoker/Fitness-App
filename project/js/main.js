document.addEventListener("DOMContentLoaded", function () {
  // Обработка формы входа (Login)
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;

      // Пример фиктивной проверки пользователя
      const validUsername = "user";
      const validPassword = "password";

      if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Здесь можно добавить логику перенаправления на другую страницу
        window.location.href = "index.html"; // Пример перенаправления
      } else {
        alert("Invalid username or password");
      }
    });
  }

  // Обработка формы регистрации (Sign Up)
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const newUsername = document.querySelector("#new-username").value;
      const newPassword = document.querySelector("#new-password").value;

      // Здесь вы можете добавить логику для сохранения данных нового пользователя
      alert(`Sign up successful for ${newUsername}!`);
      // Перенаправление на страницу входа после успешной регистрации
      window.location.href = "login.html";
    });
  }
});
