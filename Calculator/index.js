// Traemos los 2 Parrafos que usaremos para graficar en al visor.
// const numUno = document.querySelector('#numUno');
// const numDos = document.querySelector('#numDos');

//Funcion que cambiara el color del fondo del DOM, y aplicara la clase de CSS 'modoOscuro'.
function modoDarkLight() {
    document.body.classList.toggle('modoOscuro');
}

// Agregamos La Funcion al Boton que Limpiara los Parrafos del Visor.
function borrar() {
    numUno.value = '';
    numDos.value = '';
    console.log('Borrar Funciona');
}

function igual() {
    console.log('El Igual Funciona');
};

function multiplicacion() {
    console.log('Multiplicacion Funciona');
}

function division() {
    console.log('Division Funciona');
}

function resta() {
    console.log('Resta Funciona');
}

function suma() {

    console.log('Suma Funciona');
}