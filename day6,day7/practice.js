// console.log("One");
// console.log("Two");

// console.log("Three");
// setTimeout(hello,2000);
// function hello(){
//     console.log("Hello World");
// }

// console.log("Four");



//-------Call Back Function----------//
// function sum(a,b,callback){
//     callback(a,b);
// }
// sum(1,2,(a,b)=>{
//     console.log(a+b);
// });
////--------sych-----//
// function getData(dataid){
//     setTimeout(()=>{
//         console.log("data"+dataid);
//     },2000);
// }
// getData(1);
// getData(2);
// getData(3);
///-----promises-----//
// let pr=new Promise((resolve,reject)=>{
//     console.log("this is promise");
//     resolve("success");
//    // reject("error");
// })
// pr.then((error)=>{console.log("rejected",error);
// }).then((res)=>{console.log(resolved);

// });
//------await-------//
function api(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data"+data);
            resolve(300);
        },2000);
        });
        
    }
    (async function(){
        await api(1);
        await api(2);
        await api(3);
        await api(4);
    })();