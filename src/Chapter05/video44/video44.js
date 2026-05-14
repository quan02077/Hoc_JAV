console.log("Video 44");

const sv1 = {
    name: "Quan",
    score: 9.5
}
const sv2 = {
    name: "Chó",
    score: 5.5
}
const sv3 = {
    name: "Mèo",
    score: 8.5
}

const dssv = [sv1, sv2, sv3];

console.log(dssv);

// dssv.forEach((value, index) => {
//     console.log("index: ", index, "Name: ", value.name)
// })
const person = {
    email: "quan02077@gmail.com",
    age: 20
}

//for...in
// for (let key in person) {
//     console.log(key, person[key]);
// }
//for...of
// for (let value of Object.values(person)) {
//     console.log(value);
// }
for (let value of Object.entries(person)) {
    console.log(value);
}