const display=document.getElementById("display");
function insert(num){
    display.value+=num;
}
function clearScreen(){
    display.value="";
}

function Delete(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(e){
        display.value="Error";
    }
}
