/*function manageStudent(callback){
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
*/
function greet(name,callback){
    setTimeout(()=>{
    console.log("hello"+name);
    callback();
    },1000);
}
function bye(){
    console.log("bye");
}
greet("abignaya",bye);
