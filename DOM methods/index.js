const padre = document.querySelector('#padre'); // Traemos el div padre y lo guardamos en una constante.
const hijos = padre.children; // Seleccionamos los hijos del div padre y los guardamos en una constante.


//padre.classList.add('background'); // Aplicamos la clase 'background' y se la añadimos al div padre.

// for (let index = 0; index < hijos.length; index++) { // Se aplica un ciclo for para añadir a cada hijo la propiedad 'background'.
//     hijos[index].classList.add('background');     
// }

//console.log(padre.lastElementChild.innerText = 'hijazo'); // Imprime: Hijo 5. Y Asigna nuevo valor. 

console.log(padre.lastElementChild.classList.add('rojo')); // Añade las propiedades de la clase 'rojo' al ultimo hijo del div padre.

console.log(padre.lastElementChild.classList.remove('rojo')); // Remueve las propiedades de la clase 'rojo' al ultimo hijo del div padre.

//toggle: Funciona como un interruptor, si la luz esta prendida, la paga. Si esta apagada, la enciende.
const boton = document.querySelector('#ejecutar');

boton.addEventListener('click', () => {
    padre.lastElementChild.classList.toggle('rojo'); // Segun la presion del boton: Cambia de negro a rojo su color.
} );

padre.firstElementChild.nextElementSibling.classList.add('rojo') // Añade la clase 'rojo' a al hijo despues del primero, osea al segundo.

hijos[2].classList.add('rojo'); // Añade la prpiedad de la clase rojo al hijo del indice 2, osea al tercer elemento (hijo).

boton.addEventListener('click', function() {
    this.classList.toggle('boton'); // Añade las propiedades de la clase 'boton' al presionar el boton o las quita al presioanrlo nuevamente.
} );