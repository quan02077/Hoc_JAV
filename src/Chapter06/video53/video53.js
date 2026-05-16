console.log("Video 53");

const btn = document.getElementById("myBtn");
console.log(btn);

const backBtn = document.getElementById("backBtn");
console.log(backBtn);

const text = document.getElementById("myText");
console.log(text);

btn.addEventListener("click", () => {
    console.log("Changing color...");
    text.style.color = "blue";
    text.style.backgroundColor = "yellow";
    text.classList.add("highlight", "bold");
});

backBtn.addEventListener("click", () => {
    console.log("Changing back...");
    text.style.color = "";
    text.style.backgroundColor = "";
    text.classList.remove("highlight", "bold");
});