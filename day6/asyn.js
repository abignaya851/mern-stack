
function bakeTheCake(){
    setTimeout(()=>{
    console.log("Line 2");
    },1000);
};
console.log("Line 1");
bakeTheCake();
console.log("Line 3");