console.log("app 2 is worfing");
fetch("/weather?address=" + "lahore")
.then(res=> {
    console.log(res);
    return res.json();
}).then(data=> {
    console.log(data);
})