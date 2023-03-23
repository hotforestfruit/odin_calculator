let num1=[];
let num2=[];
let operator;
let displayArea = document.querySelector('#display');
let inputValue=[];
let displayValue=[];
let opIn = false;
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,op,b){
    if(op == '+'){
        return add(a,b)
    }else if(op==='-'){
        return subtract(a,b)
    }else if(op === '*'){
        return multiply(a,b)
    }else if(op==='/'){
        return divide(a,b)
    };
}
const inputNumbers = document.querySelectorAll("#numbers > button");
inputNumbers.forEach((button) =>{
    button.addEventListener('click',()=>{
        
        displayValue.push(button.id);
        displayArea.innerHTML = `<h3>${displayValue.join('')}</h3>`;
        if(!opIn){
            num1.push(button.id);
        }else{
            num2.push(button.id);
        }
    })
    
})

const inputOps = document.querySelectorAll("#operators > button");
inputOps.forEach((button) =>{
    button.addEventListener('click',()=>{
        displayValue.push(button.id);
        displayArea.innerHTML = `<h3>${displayValue.join('')}</h3>`;
        if(opIn){
            opIn=false;
        }else if(!opIn){
            opIn=true;
        }
        operator=button.id;
    })
    
})
const clear = document.querySelector("#clear");
clear.addEventListener('click', ()=> {
    displayValue = [];
    displayArea.innerHTML = `<h3>${displayValue}</h3>`
    opIn=false;
    operator=[];
    inputValue=[];
    displayValue=[];
})
const solve = document.querySelector('#equals');
solve.addEventListener('click', ()=> {
    
    solution = operate(parseInt(num1.join('')),operator,parseInt(num2.join('')));
    console.log(solution);
    displayArea.innerHTML = `<h3>${solution}</h3>`
    inputValue = [];
    opIn=false;
    operator=0;
    num1=[];
    num2=[];
})