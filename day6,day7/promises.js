/*const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const student={id:1,name:"abignaya"};
        const status=true;
        if(status){
            resolve(student);
        }
        else{
            reject("student not found");
        }
    },2000);
});
pr.then((student)=>{
    console.log(student);
})
pr.catch((error)=>{
    console.log(error);
});*/
let pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Line 1");
        resolve("success");
},2000);
});
       /* const status=false;
        if(status){
            resolve(student);
    
        }
        else{
            reject("student not found");
        }
    },3000);
});
pr.then((student)=>{
    console.log(student);
})
pr.catch((error)=>{
    console.log(error);
});*/
