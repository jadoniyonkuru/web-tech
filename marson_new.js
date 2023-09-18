document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");

    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    signupButton.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const roleSelect = document.getElementById("role");
    const documentInput = document.getElementById("document-input");

    roleSelect.addEventListener("change", function () {
        if (roleSelect.value === "seller" || roleSelect.value === "engineer" || roleSelect.value === "land_owner") {
            documentInput.style.display = "block";
        } else {
            documentInput.style.display = "none";
        }
    });
});