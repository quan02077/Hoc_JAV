console.log("Lab 05");

const fetchData = async () => {
    try {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        const tableBody = document.getElementById("users-body");
        let html = "";
        data.forEach(user => {
            html += `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>`
        });
        tableBody.innerHTML = html;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData()
