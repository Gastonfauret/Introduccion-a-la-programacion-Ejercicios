// Traemos Cada Boton con su Correspondiente Numero.
const cero = document.querySelector('#cero');
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');
const ocho = document.querySelector('#ocho');
const nueve = document.querySelector('#nueve');

// Traemos los botones de las operaciones matematicas y el igual.
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const division = document.querySelector('#division');
const multiplicacion = document.querySelector('#multiplicacion');
const igual = document.querySelector('#igual');

// Traemos el Boton que Tendra la funcion de limpiar el visor.
const borra = document.querySelector('#borra');

// Traemos los 2 Parrafos que usaremos para graficar en al visor.
const parrafoUno = document.querySelector('#parrafoUno');
const parrafoDos = document.querySelector('#parrafoDos');

// Agregamos la Funcion a cada Boton de Numeros que Mostrara su determinado numero.
cero.addEventListener('click', () => {
    parrafoDos.textContent += '0';
});

uno.addEventListener('click', () => {
    parrafoDos.textContent += '1';
});

dos.addEventListener('click', () => {
    parrafoDos.textContent += '2';
});

tres.addEventListener('click', () => {
    parrafoDos.textContent += '3';
});

cuatro.addEventListener('click', () => {
    parrafoDos.textContent += '4';
});

cinco.addEventListener('click', () => {
    parrafoDos.textContent += '5';
});

seis.addEventListener('click', () => {
    parrafoDos.textContent += '6';
});

siete.addEventListener('click', () => {
    parrafoDos.textContent += '7';
});

ocho.addEventListener('click', () => {
    parrafoDos.textContent += '8';
});

nueve.addEventListener('click', () => {
    parrafoDos.textContent += '9';
});

// Agregamos La Funcion al Boton que Limpiara los Parrafos del Visor.
borra.addEventListener('click', () => {
    parrafoUno.textContent = '';
    parrafoDos.textContent = '';
});

suma.addEventListener('click', () => {
    operSuma();
})

igual.addEventListener('click', () => {
    
})

function operSuma() {
    const num1 = Number(parrafoDos.textContent);
    parrafoUno.textContent = `${parrafoDos.textContent} +`;
    parrafoDos.textContent = "";
    const num2 = Number(parrafoDos.textContent);
    parrafoUno = `${parrafoUno.textContent} + ${parrafoDos.textContent}`
}

// btn.addEventListener('click', () => {
//     if(chosen.value === 'suma') {
//         operation(Number(numOne.value), Number(numTwo.value), sum)
//     }; if(chosen.value === 'resta') {
//         operation(numOne.value, numTwo.value, rest)
//     }; if(chosen.value === 'division') {
//         operation(numOne.value, numTwo.value, div)
//     }; if(chosen.value === 'multiplicacion') {
//         operation(numOne.value, numTwo.value, mult)
//     }

//     function operation(num1, num2, func) {
//         result.innerHTML = func(num1, num2);
//     }
// });

function sum(num1, num2) {
    return num1 + num2
}

// function rest(num1, num2) {
//     return num1 - num2
// }

// function mult(num1, num2) {
//     return num1 * num2
// }

// function div(num1, num2) {
//     return num1 / num2
// }
