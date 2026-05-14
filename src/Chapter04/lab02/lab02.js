console.log("Lab 02");

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const tinhTrungBinh = (diemToan, diemVan, diemAnh) => {
    return (diemToan + diemVan + diemAnh) / 3;
}

const xepLoai = (diemTB) => {
    if (diemTB >= 9)
        return "Xuất sắc";
    else if (diemTB >= 8 && diemTB < 9)
        return "Giỏi";
    else if (diemTB >= 6.5 && diemTB < 8)
        return "Khá";
    else
        return "Trung bình";
}
const diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(
    `
    Điểm trung bình: ${diemTB}
    Xếp loại: ${xepLoai(diemTB)}
    `
)

