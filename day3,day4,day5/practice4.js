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
