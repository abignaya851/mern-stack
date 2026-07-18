document.getElementById("title").onclick=function(){
    this.style.color="red";
}
let count=0;
function countClick(){
    count++;
    document.getElementById("count").innerHTML="Button Clicked: "+ count +" Times";
}