console.log("Video 55");

const btn = document.getElementById("submitBtn");
const usernameInput = document.getElementById("username");
const previousInput = document.getElementById("displayPrevUsername");
const prename = localStorage.getItem("input");

if (prename) {
    previousInput.innerHTML = `<b>${prename}</b>`;;
}

btn.addEventListener("click", () => {
    // console.log(usernameInput.value);
    document.getElementById("displayUsername").innerHTML = `<b>${usernameInput.value}</b>`;
    localStorage.setItem("input", usernameInput.value);

});