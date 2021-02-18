console.log("Working");
fetch("http://localhost:9001/getBids")
.then(res => res.json())
.then(data => {
console.log(data);
}).catch(err => {
    console.log(err);
})