window.onload = function () {

  alert("Welcome to my portfoilo");
  showGreeting();
  showDate();
  document.getElementById("title").onclick=function(){
    this.style.color="red";
}
};

function showDate(){
let today=new Date();
document.getElementById("date").innerHTML="Today's Date:"+today.toDateString();
document.getElementById("date1").innerHTML=today.toDateString();
}
function showGreeting(){
    let hour=new Date().getHours();
    if(hour<12){
        document.getElementById("greeting").innerHTML="Good Morning";
} 
else if(hour<18){
    document.getElementById("greeting").innerHTML="Good Aternoon";
}  else{
    document.getElementById("greeting").innerHTML="Good Evening";
}
} 

let count=0;
function countClick(){
    count++;
    document.getElementById("count").innerHTML="Button Clicked: "+ count +" Times";
}
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
alert("Button Clicked");
});
document.getElementById("submitBtn").addEventListener("click",function(){
    countClick();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    if(name===""||email===""){
        alert("Please fill all required fields.");
        return;
    }
    alert("Form Submitted Successfully");
});


