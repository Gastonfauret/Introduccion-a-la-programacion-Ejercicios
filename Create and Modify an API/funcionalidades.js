import { User } from "./classUser.js";

URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

const user = new User('Juan Pablo', 'Gonzalez', '12/06/80', 'Cis', 'Libertad Av. 120', 'Benito Juarez', 'jpgonza@jijimail.com', 112468097, '3')

user.dataApi(URL)
//user.eliminaDato(24)
//-------------------------------------------------------------

const openModalAdd = document.getElementById('open-modal-add');
const cleanAdd = document.getElementById('btn-clean-add')
const modalAdd = document.getElementById("modal-add");
const closeModalAdd = document.getElementById("close-modal-add");
const submitAdd = document.getElementById("btn-submit-add");

closeModalAdd.addEventListener("click", () => {
    console.log('Boton Cierre de Modal Anda Perfecto');
    modalAdd.close();
});

cleanAdd.addEventListener('click', () => {
    console.log('Boton Limpiar de Modal Anda Perfecto');
})

openModalAdd.addEventListener("click", () => {
    console.log('Boton Apertura de Modal Anda Perfecto');
    modalAdd.showModal();
});

submitAdd.addEventListener('click', () => {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const birth = document.querySelector('#birth');
    const gender = document.querySelector('#gender');
    const address = document.querySelector('#address');
    const city = document.querySelector('#city');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');

    const user = new User(name.value, lastName.value, birth.value, gender.value, address.value, city.value, email.value, phone.value, '');

    user.anadirDato(user);
});

//--------------------------------------------------------------
const openModalDel = document.getElementById('open-modal-del');
const cleanDel = document.getElementById('btn-clean-del')
const modalDel = document.getElementById("modal-del");
const closeModalDel = document.getElementById("close-modal-del");
const submitDel = document.getElementById("btn-submit-del");
const id = document.getElementById("id");

closeModalDel.addEventListener("click", () => {
    console.log('Boton Cierre de Modal Anda Perfecto');
    modalDel.close();
});

cleanDel.addEventListener('click', () => {
    console.log('Boton Limpiar de Modal Anda Perfecto');
})

openModalDel.addEventListener("click", () => {
    console.log('Boton Apertura de Modal Anda Perfecto');
    modalDel.showModal();
});

submitDel.addEventListener('click', () => {
    user.eliminaDato(id.value);
});

//--------------------------------------------------------------

const search = document.querySelector('#search');
const erase = document.querySelector('#erase');
const update = document.querySelector('#update');

search.addEventListener('click', () => {
    console.log('Boton Search Anda Perfecto');
});

erase.addEventListener('click', () => {
    console.log('Boton Erase Anda Perfecto');
});

update.addEventListener('click', () => {
    user.dataApi(URL)
    console.log('Boton Update Anda Perfecto');
});

//--------------------------------------------------------------

// const form = document.getElementById("form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit() {
//     const user = new FormData(form);
//     console.log(user.get("name"));
// }

//--------------------------------------------------------------