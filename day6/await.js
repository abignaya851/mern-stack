const pr=new Promise((resolve,reject)=>{
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
async function getStudent(){
    try{
        const student=await pr;
        console.log(student);
    }
    catch(error){
        console.log(error);
    }
}
getStudent();