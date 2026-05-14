console.log("video 40");

const scores = [10, 8, 3, 7, 4]

// scores.forEach((value, index) => {
//     console.log("index: ", index, "Value: ", value);
// })

const scorex2 = scores.map((value, index) => {
    return value * 2;
})

const others_scorex2 = scores.map((value, index) => value * 2)

console.log(others_scorex2)