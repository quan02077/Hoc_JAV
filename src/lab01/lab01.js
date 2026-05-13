console.log("Lab 01");

const name = "Nguyễn Nhật Minh Quân";
const birthYear = 2006;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;

console.log(
    `
    Tên: ${name}
    Tuổi: ${age}
    Sinh viên: ${isStudent}
    `
)

