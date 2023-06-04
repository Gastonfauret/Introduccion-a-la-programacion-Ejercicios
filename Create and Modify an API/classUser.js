export class User {
    constructor(name, lastName, birth, gender, address, city, email, phone, id) {
        this.name = name;
        this.lastName = lastName;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.id = id
    }

    URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

    //Metodo que realizara diferentes funciones.
    dataApi(url) {
        fetch(url) //Realizamos el fetch: Traemos los datos de la API.
            .then(res => res.json()) // Recibimos una respuesta y la convertimos en formato Json.
            .then(data => console.log(data)) // Tomamos la respuesta y la mostramos en consola.          
            .catch(err => console.log(err)) // En caso de a ver un error lo mostramos en consola.
    }

    // Funcion que busca un registro por Id, que pasaremos como parametro.
    buscaPorId(id) {
        fetch(URL + `/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    // Funcion que elimina un registro dado por Id, por parametro.
    eliminaDato(id) {
        fetch(URL + `/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    anadirDato(user) {
        fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    actualizaDato(id, user) {
        fetch(URL + `/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    };
}