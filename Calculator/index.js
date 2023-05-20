const numOne = document.querySelector('#numOne');
const numTwo = document.querySelector('#numTwo');
const chosen = document.querySelector('#chosen');
const btn = document.querySelector('#operation');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    if(chosen.value === 'suma') {
        operation(Number(numOne.value), Number(numTwo.value), sum)
    }; if(chosen.value === 'resta') {
        operation(numOne.value, numTwo.value, rest)
    }; if(chosen.value === 'division') {
        operation(numOne.value, numTwo.value, div)
    }; if(chosen.value === 'multiplicacion') {
        operation(numOne.value, numTwo.value, mult)
    }

    function operation(num1, num2, func) {
        result.innerHTML = func(num1, num2);
    }
});

function sum(num1, num2) {
    return num1 + num2
}

function rest(num1, num2) {
    return num1 - num2
}

function mult(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}
