console.log("Video 63");

//fetch API => raw data (Response) => object 

const temp = fetch("http://localhost:8000/users")

temp.then(res => {
    res.json().then(data => {
        console.log(data);
    });
});