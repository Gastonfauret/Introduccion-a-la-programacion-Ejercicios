const boton = document.querySelector('#ejecutar');

// Inputs
const titulo = document.querySelector('.titulo');
const url_imagen = document.querySelector('.url-imagen');
const texto = document.querySelector('.texto');
const color = document.querySelector('#color');

// Tarjetas
const tarjeta = document.querySelector('#tarjeta');
const tarjeta_titulo = document.querySelector('.tarjeta-titulo');
const tarjeta_imagen = document.querySelector('.tarjeta-imagen');
const tarjeta_texto = document.querySelector('.tarjeta-texto');

boton.addEventListener('click', function() {
    tarjeta_titulo.innerText = titulo.value;
    tarjeta_imagen.src = url_imagen.value;
    tarjeta_texto.innerText = texto.value;
    tarjeta.style.borderColor = color.value;

    //tarjeta_imagen.src = "pc.jpg"; //Subir imagen desde la pc.
})

titulo.addEventListener('focus', function(){
    boton.style.color = 'blue'
})

titulo.addEventListener('blur', function(){
    boton.style.color = 'green'
})

boton.onclick() = function() {
    tarjeta_titulo.innerText = titulo.value;
}

