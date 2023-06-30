const btns = document.querySelectorAll('input[type="button"');
const input = document.getElementById('display');


for (let i = 0; i <btns.length; i++){
  btns[i].addEventListener("click",function(){ 
    if (btns[i].value == "AC"){
      input.value = ""
    }
    else if (btns[i].value == "="){
      input.value = eval(input.value)
    }
    else
      input.value+= this.value
    }
    
  )};

