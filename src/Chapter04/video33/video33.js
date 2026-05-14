console.log("Video 33");

let globalVar = "Tôi là biến toàn cục";

function show() {
    console.log(globalVar);
}

show();
console.log(globalVar);

function sayHi() {
    let name = "Quan";
    console.log("Hi " + name);
    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
    }
    console.log(x);
}

sayHi();
console.log(name);