console.log("Working");
fetch("https://powerful-sands-61874.herokuapp.com//getBids")
.then(res => res.json())
.then(data => {
console.log(data);
}).catch(err => {
    console.log(err);
})