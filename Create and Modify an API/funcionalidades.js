const openModal = document.querySelector('#open-modal');

const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const birth = document.querySelector('#birth');
const gender = document.querySelector('#gender');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

const btnSubmit = document.querySelector('#btn-submit')

openModal.addEventListener('click', () => {
    console.log('Boton Modal Anda Perfecto');
})

btnSubmit.addEventListener('click', () => {
    console.log('Boton Submit Anda Perfecto');
})