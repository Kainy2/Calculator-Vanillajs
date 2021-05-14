let number = document.querySelectorAll('button.number');


let root = document.querySelector('button.root');
let exp = document.querySelector('button.exp');
let equals = document.querySelector('button.equals');
let del = document.querySelector('button.del');
let clr = document.querySelector('button.clr');
let subtr = document.querySelector('button.subtr');
let multiply = document.querySelector('button.multiply');
let add = document.querySelector('button.add');
let divide = document.querySelector('button.divide');
let result = document.querySelector('div.result p');
let input = document.querySelector('div.input p');

console.log(number.innerText);


clr.addEventListener("click", operandclr);
function operandclr(e) {
    input.innerText = "";
    result.innerText = "";
}

for (let i = 0; i < number.length; i++) {
    
    number[i].addEventListener("click", operand);
    function operand(e) {

        input.innerText += number[i].innerText;

    }
}

multiply.addEventListener("click", operandMultiply);
function operandMultiply(e) {

    input.innerText += "*";

}

divide.addEventListener("click", operandDivide);
function operandDivide(e) {
    
    input.innerText += "/";
    
}
exp.addEventListener("click", operandExp);
function operandExp(e) {
    
    input.innerText += "e";
    
}

del.addEventListener("click", operandDel);
function operandDel(e) {

    input.innerText = input.innerText.slice(
        0, input.innerText.length - 1);

}

equals.addEventListener("click", equalFunction);
function equalFunction(e) {
    result.innerText = Number(eval(input.innerText));
    input.innerText = "";

}

root.addEventListener("click", rootFunction);
function rootFunction(e) {
    result.innerText = Math.sqrt(Number(eval(input.innerText)));
    input.innerText = "";
}


// subtr.addEventListener("click", operandSubtr);
// function operandSubtr(e) {
//     input.innerText = input.innerText + "-";
// }

// let one = document.querySelector('button.one');
// let two = document.querySelector('button.two');
// let three = document.querySelector('button.three');
// let four = document.querySelector('button.four');
// let five = document.querySelector('button.five');
// let six = document.querySelector('button.six');
// let seven = document.querySelector('button.seven');
// let eight = document.querySelector('button.eight');
// let nine = document.querySelector('button.nine');
// let point = document.querySelector('button.point');
// let zero = document.querySelector('button.zero');