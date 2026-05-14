console.log("Video 41");

const ages = [10, 20, 30, 25, 12, 19, 3, 9, 4]
console.log(ages);

const agesx2 = ages.map((value, index) => value * 2);
console.log(agesx2);

const ages_18 = ages.filter((value, index) => value >= 18);
console.log(ages_18);