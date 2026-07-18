let heading=document.getElementById("title");
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
     heading.style.color="Black";
     });    
btn.addEventListener("click",function(){  
  heading.innerText="my Portfolio"
});
btn.addEventListener("click",function(){
    alert("Button Clicked");
});
let mouse=document.getElementById("move");
mouse.addEventListener("mouseover",function(){
    mouse.style.color="red";    
}); 