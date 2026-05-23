console.log("Video 70");
//tạo to do
const toDo = document.getElementById("toDoInput");
const submitBtn = document.getElementById("addTodoButton");
let listToDo = JSON.parse(localStorage.getItem("toDoList")) || [];
function randomId() {
    return Math.floor(Math.random() * 1000);
}
if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const toDoValue = toDo.value.trim();
        const toDoObject = {
            id: randomId(),
            name: toDoValue,
        };
        listToDo.push(toDoObject);
        localStorage.setItem("toDoList", JSON.stringify(listToDo));
        toDo.value = "";
        alert("Thêm to do thành công!");
        window.location.href = "video70.html";
    });
}

//hiển thị to do
const toDoTable = document.querySelector("#users tbody");
let html = "";
try {
    listToDo.forEach(toDoItem => {
        html += `
        <tr>
            <td>${toDoItem.id}</td>
            <td>${toDoItem.name}</td>
            <td>
                <button class="deleteBtn" data-id="${toDoItem.id}">Xóa</button>
            </td>
        </tr>
    `;
    })
    toDoTable.innerHTML = html;
}
catch (error) {
    console.error("Lỗi khi hiển thị danh sách to do:", error);
}

//Xóa to do
document.querySelectorAll(".deleteBtn").forEach(function (button) {
    button.addEventListener("click", () => {
        const toDoId = Number(button.getAttribute("data-id"));
        listToDo = listToDo.filter(a => a.id !== toDoId);
        localStorage.setItem("toDoList", JSON.stringify(listToDo));
        location.reload();
    })
})