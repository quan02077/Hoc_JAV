console.log("Video 43");

const person = {
    name1: "Quan",
    age: 20
}
//get data
console.log("Person before: ", person);

console.log("Age: ", person.age);

console.log("Name: ", person["name1"]);
//set data
person.address = "TpHCM";
person["language"] = "Vietnamese";

//delete data
delete person.address

console.log("Person after : ", person);