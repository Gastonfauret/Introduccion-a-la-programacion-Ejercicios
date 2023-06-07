import {User} from "./classUser.js";

URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

const user = new User('Juan Pablo', 'Gonzalez', '12/06/80', 'Cis', 'Libertad Av. 120', 'Benito Juarez', 'jpgonza@jijimail.com', 112468097, '3')

//-------------------------------------------------------------

const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById("close-modal");
const clean = document.getElementById('btn-clean')
const modal = document.getElementById("modal");

closeModal.addEventListener("click", () => {
    console.log('Boton Cierre de Modal Anda Perfecto');
    modal.close();
});

clean.addEventListener('click', () => {
    console.log('Boton Limpiar de Modal Anda Perfecto');
})

openModal.addEventListener("click", () => {
    console.log('Boton Apertura de Modal Anda Perfecto');
    modal.showModal();
});

//--------------------------------------------------------------

const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const birth = document.querySelector('#birth');
const gender = document.querySelector('#gender');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

//--------------------------------------------------------------

const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener('click', () => {
    console.log('Boton Submit Anda Perfecto');
})

//--------------------------------------------------------------

const search = document.querySelector('#search');
const add = document.querySelector('#add');
const erase = document.querySelector('#erase');
const update = document.querySelector('#update');

search.addEventListener('click', () => {
    console.log('Boton Search Anda Perfecto');
});

add.addEventListener('click', () => {
    console.log('Boton Add Anda Perfecto');
});

erase.addEventListener('click', () => {
    console.log('Boton Erase Anda Perfecto');
});

update.addEventListener('click', () => {
    user.dataApi(URL)
    console.log('Boton Update Anda Perfecto');
});

//--------------------------------------------------------------

const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit() {
    const user = new FormData(form);
    console.log(user.get("name"));
}

//--------------------------------------------------------------