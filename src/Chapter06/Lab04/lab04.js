console.log("Lab 04");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("submitBtn");


btn.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "quan02077@gmail.com" && password === "123456") {
        alert("Login successful!");
        window.location.href = "success.html";
    }
    else {
        alert("Login failed! Please check your username and password.");
        usernameInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
    }
});



