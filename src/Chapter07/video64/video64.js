console.log("video 64");

const doSomething = () => {

    const a = 10, b = 0;

    if (b === 0) {
        throw new Error("Không thể chia cho 0");
    }

    console.log(a / b)
}
try {
    doSomething();
}
catch (error) {
    console.log("Có lỗi xảy ra: " + error.message);
}
finally {
    console.log("Đoạn code này sẽ luôn được thực thi");
}