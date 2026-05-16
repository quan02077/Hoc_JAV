console.log("Video 52");

const btn = document.getElementById("myBtn");
console.log(btn);

const backBtn = document.getElementById("backBtn");
console.log(backBtn);

const text = document.getElementById("myText");
console.log(text);

btn.addEventListener("click", () => {
    text.innerHTML = "<span style='color: red'>Text changed!</span>";
});

backBtn.addEventListener("click", () => {
    text.innerText = "Video 52";
});