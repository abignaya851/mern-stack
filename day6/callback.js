function manageStudent(callback){
    setTimeout(()=>{
        callback();
    }
    ,1000)
} 
//function updateStudent(){
    //console.log("student updated");
//}
//manageStudent(updateStudent);
manageStudent(()=>console.log("student updated"));