// console.log("Hello World");      
// fetch("https://jsonplaceholder.typicode.com/users")
// //get the data using (then)data
// .then((res)=>res.json()).then((data)=>console.log(data));
//    //.then((data)=>console.log(data)) ;                                    

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{"Content-type":"application/json; charset=UTF-8"},
    body:JSON.stringify({
        title:"abi",
        boby:"hello",
        userId:2,
    })
    }).then((res)=>res.json())
    .then((data)=>console.log(data));
   


