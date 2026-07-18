function showDate(){
let today=new Date();
document.getElementById("date").innerHTML="Today's Date:"+today.toDateString();
document.getElementById("date1").innerHTML=today.toDateString();
document.getElementById("data").inner
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