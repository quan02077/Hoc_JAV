console.log("Video 39");

const myClass = ["Quan", "Vy Vy", "Umi"]

console.log(myClass, myClass.length);
//for
// for (let i = 0; i < myClass.length; i++) {
//     console.log("STT: ", i, "Tên: ", myClass[i]);
// }
//foreach
myClass.forEach(function (value, index) {
    console.log("value = ", value, "index: ", index)
})

myClass.forEach((value, index) => {
    console.log("value = ", value, "index: ", index)
})