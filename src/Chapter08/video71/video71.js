console.log("Video 71");
//tạo blog
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const contentInput = document.getElementById("content");
const saveBtn = document.getElementById("save");
saveBtn.addEventListener('click', async () => {
    const rawResponse = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: titleInput.value, author: authorInput.value, content: contentInput.value })
    });
    titleInput.value = "";
    authorInput.value = "";
    contentInput.value = "";
    const data = await rawResponse.json();
    addNewRow(data);
    alert("Thêm blog thành công!");
});
//thêm row blog
const addNewRow = (blog) => {
    const tableBody = document.querySelector('#users tbody');

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class="delete-btn" data-id="${blog.id}">Xóa</button>
                </td>
            </tr>
     `;

    tableBody.appendChild(newRow);
}
//hiển thị blog
const toDoTable = document.querySelector("#users tbody");
fetch('http://localhost:8000/blogs')
    .then(response => response.json())
    .then(blogs => {
        blogs.forEach(blog => {
            toDoTable.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class="delete-btn" data-id="${blog.id}">Xóa</button>
                </td>
            </tr>
            `;
        });

        document.querySelectorAll(".delete-btn").forEach(function (button) {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-id");

                fetch(`http://localhost:8000/blogs/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                const row = button.closest('tr');
                row.remove();
            });
        });
    });
