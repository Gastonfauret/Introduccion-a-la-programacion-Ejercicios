const { type } = require("os");
const { relative } = require("path");
const { getPositionOfLineAndCharacter } = require("typescript");

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


function modoDarkLight() {
    const main_body = document.body;
    main_body.classList.toggle('modoOscuro');

}

// Agregamos la Funcion a cada Boton de Numeros que Mostrara su determinado numero.
cero.addEventListener('click', () => {
    parrafoDos.textContent += 0;
});

uno.addEventListener('click', () => {
    parrafoDos.textContent += 1;
});

dos.addEventListener('click', () => {
    parrafoDos.textContent += 2;
});

tres.addEventListener('click', () => {
    parrafoDos.textContent += 3;
});

cuatro.addEventListener('click', () => {
    parrafoDos.textContent += 4;
});

cinco.addEventListener('click', () => {
    parrafoDos.textContent += 5;
});

seis.addEventListener('click', () => {
    parrafoDos.textContent += 6;
});

siete.addEventListener('click', () => {
    parrafoDos.textContent += 7;
});

ocho.addEventListener('click', () => {
    parrafoDos.textContent += 8;
});

nueve.addEventListener('click', () => {
    parrafoDos.textContent += 9;
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
    const num2 = parrafoDos.textContent;
    const num = operSuma();
    console.log(Number(num));
    console.log(Number(num2));
    const resultado = Number(num) + Number(num2);
    parrafoDos.textContent = resultado;    
})

function operSuma() {
    const num1 = Number(parrafoDos.textContent);
    parrafoUno.textContent += `${num1} +`;
    parrafoDos.textContent = "";
    console.log(num1);
    return num1
}

