function add(a, b){
    a= parseInt(a);
    b= parseInt(b);
    return a + b;
}
function subtract(a,b){
    a= parseInt(a);
    b= parseInt(b);
    return a - b;
}
function multiply(a,b){
    a= parseInt(a);
    b= parseInt(b);
    return a * b;

}
function divide(a,b){
    a= parseInt(a);
    b= parseInt(b);
    if(b==0){
        return "you are an idiot";
    }
    return a / b;
}
function operate(a, b, op){
    switch(op){
        case"+":
            return add(a,b);
            break;
        case"-":
            return subtract(a,b);
            break;
        case"*":
            return multiply(a,b);
            break;
        case"/":
            return divide(a,b);
            break;

    }
}
function addToDisplay(num){
 let display= document.querySelector("#screen");
 input+=num;
 display.value+=num;
}
let input="";
let inputArray = [];
function displayResult() {
    let display = document.querySelector("#screen");
    let result;
  
    if (input !== '') {
      inputArray = input.match(/\d+|[+\-*/]/g);
  
      if (inputArray && inputArray.length === 3) {
        result = operate(inputArray[0], inputArray[2], inputArray[1]);
  
        if (result !== undefined && result !== "cannot divide by zero") {
          display.value = result;
          input = result;
        } else {
          display.value = "Error: " + (result || "Invalid operation");
        }
      } else {
        display.value = "Error: Invalid input format";
      }
    } else {
      display.value = "Enter an expression";
    }
  }

function clearDisplay() {
    let display = document.querySelector("#screen");
    display.value = "";
    input = '';}
 