
//Arrays for storing 2 numbers to be evaluated and operator
let num1=[];
let num2=[];
let operator;
//Variable for display area
let displayArea = document.querySelector('#display');
//Array for inputs
let inputValue=[];
let opIn = false;
let solved = false;
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
        
        inputValue.push(button.id);
        //displayArea.innerHTML = `<h3>${inputValue.join('')}</h3>`;
        if(!opIn && !solved){
            num1.push(button.id);
            displayArea.innerHTML= `<h3>${num1.join('')}</h3>`;
        }else{
            num2.push(button.id);
            displayArea.innerHTML= `<h3>${num2.join('')}</h3>`;
        } 
    })
    
})

const inputOps = document.querySelectorAll("#operators > button");
inputOps.forEach((button) =>{
    button.addEventListener('click',()=>{
        inputValue.push(button.id);
        /* displayArea.innerHTML = `<h3>${inputValue.join('')}</h3>`; */
        if(opIn){
            opIn=false;
        }else if(!opIn){
            opIn=true;
        }
        operator=button.id;
        if(!solved){
            solution = operate(
                parseInt(num1.join('')),
                operator,parseInt(num2.join('')));
            solved=true;
            
        }else{
            solution = operate(
                parseInt(num1.join('')),
                operator,parseInt(num2.join('')));
            solved=false;
            /* displayArea.innerHTML = `<h3>${solution}</h3>` */
        }
    })
    
})
const clear = document.querySelector("#clear");
clear.addEventListener('click', ()=> {
    inputValue = [];
    displayArea.innerHTML = `<h3>${inputValue}</h3>`
    opIn=false;
    operator=[];
    num1=[];
    num2=[];
    solved=false;
})
const solve = document.querySelector('#equals');
solve.addEventListener('click', ()=> {
    
    solution = operate(
        parseInt(num1.join('')),
        operator,parseInt(num2.join('')));
    //console.log(solution);
    console.log(inputValue)
    displayArea.innerHTML = `<h3>${solution}</h3>`
    opIn=false;
    operator=[];
    num1 = [solution];
    num2=[];
    solved=true;
})