console.log("Lab 03");

const sp1 = {
    name: "Giày",
    price: 1000000,
    inStock: true
}

const sp2 = {
    name: "Áo khoác",
    price: 5000000,
    inStock: false
}

const sp3 = {
    name: "Áo thun",
    price: 500000,
    inStock: true
}

const sp4 = {
    name: "Quần dài",
    price: 200000,
    inStock: false
}

const sp5 = {
    name: "Quần đùi",
    price: 100000,
    inStock: true
}

const products = [sp1, sp2, sp3, sp4, sp5]

//1
console.log("Sản phẩm đầu tiên: ", products[0].name);
//2
sp2.price = 150;
console.log("Danh sách tất cả sản phẩm: ", products);
//3
const sp6 = {
    name: "Nón",
    price: 400000,
    inStock: false
}
products.push(sp6);
console.log("Danh sách tất cả sản phẩm: ", products);
//4
products.pop();
console.log("Danh sách tất cả sản phẩm: ", products);
//5
products.forEach((value, index) => {
    console.log("Index: ", index, "Value: ", value);
})
//6
const products_map = products.map((value, index) => {
    console.log("Index: ", index, "Value: ", value.price);
})
//7
const products_filter = products.filter((value, index) => {
    return value.inStock === true
})
console.log("Danh sách sản phẩm còn hàng: ", products_filter)
//8
for (let key in products) {
    console.log(key, products[key])
    break;
}