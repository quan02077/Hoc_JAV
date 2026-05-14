console.log("Video 32")

const sum = (a, b) => {
    console.log("run before");
    if (typeof a !== 'number') {
        console.log("run empty return");
        return 0;
    }
    console.log("run after");
    return a + b;
}

console.log(sum("Quan", 5));