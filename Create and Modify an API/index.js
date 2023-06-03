const URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

fetch(URL)
.then(res => res.json())
.then(data => {console.log(data)
})

// const form = document.getElementById("form");
// form.addEventListener("submit", handleSubmit);
// function handleSubmit() {
//     const user = new FormData(form);
//     console.log(user.get("fullName"));
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

// const BASE_URL = "https://647a6c1bd2e5b6101db05747.mockapi.io/users";
// //get all resources
// function getAll(url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// }
// //get resource by id
// function getOne(id) {
//     fetch(BASE_URL + `/${id}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// }
// //delete one
// function deleteOne(id) {
//     fetch(BASE_URL + `/${id}`, {
//         method: "DELETE",
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// }
// //add a new resource
// const newUser = {
//     name: "Jorge Aníbal Sardón",
//     email: "giorgioDJ@dero.com",
//     phone: "(223) 232323223",
// };
// function addOne(user) {
//     fetch(BASE_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// }
// //edit a new resource
// const updatedUser = {
//     name: "Jorge 'el profe' Sardón",
//     email: "giorgioDJ@dero.com",
//     phone: "(2314) 232323223",
// };
// function updateOne(id, user) {
//     fetch(BASE_URL + `/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// }

