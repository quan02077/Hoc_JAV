console.log("Video 65");

const greeting = (name, callback) => {
    console.log(`Xin chào ${name}`);
    callback();
}

const hello = () => {
    console.log("Hello");
}

const blabla = () => {
    console.log("blabla");
}

greeting("Quân", hello);
greeting("Quân", blabla);