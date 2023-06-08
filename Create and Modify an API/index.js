import {User} from "./classUser.js";

URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

const user = new User('Juan Pablo', 'Gonzalez', '12/06/80', 'Cis', 'Libertad Av. 120', 'Benito Juarez', 'jpgonza@jijimail.com', 112468097, '3')

const user2 = {
    name: 'Juan P.',
    lastName: 'Alvarez'}

//user.anadirDato(user);
//user.eliminaDato(27);


//user.actualizaDato(20, user2);
//user.buscaPorId(24)
//user.dataApi(URL)

// Funcion Actualiza datos de Usuario Existente.
// function actualizaDato(id, user) {
//     fetch(URL + `/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// };

//dataApi(URL) //Llamado del metodo con su parametro.
//anadirDato(newUser); //Añade nuevo Usuario, con los datos pasados por parametro.
//eliminaDato(24); // Elimina un Usuario a traves de Indice dado por parametro.
//actualizaDato(23, updatedUser)

// const form = document.getElementById("form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit() {
//     const user = new FormData(form);
//     console.log(user.get("name"));
// }
// const openModal = document.getElementById("open-modal");
// const modal = document.getElementById("modal");
// const closeModal = document.getElementById("close-modal");

// closeModal.addEventListener("click", () => {
//     modal.close();
// });

// openModal.addEventListener("click", () => {
//     modal.showModal();
// });