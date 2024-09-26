/*local store, es un espacio de almacenamiento que hay en los navegdores*/
//en inspeccion en la web, entramos en aplicacion y después en almacenamiento local
localStorage.setItem("nombre" , "david");
localStorage.setItem("soy la clave", "soy el valor");

//const nombre = localStorage.getItem(soy la clave);


//con get recuperamos porl la clave
//localStorage.getItem();



//localStorage.removeItem();


//almacenamos objetos

let usuario = {
    nombre: "david",
    edad: 25,
    profesion: "programador"
}
console.log(usuario);
//ahora vamos a almacenar esta informacion en el local storage
//con json nos va a permitir convertir un valor de javascript a un valor de json
localStorage.setItem("usuario", JSON.stringify(usuario));

//en este caso convertir el objeto n una cadena de texto
localStorage.setItem("usuario", JSON.stringify(usuario));

let usuariolocalstorage = localStorage.getItem("usuario");
//para combertir la cadena de texto en un objeto
//let usuarioJSON = JSON.parse(usuariobj);
//console.log(usuarioJSON);

/************* */
/*variables*/
const check = document.querySelector(".toggle");
const body = document.querySelector("body");

let oscuro = Boolean(window.localStorage.getItem("oscuro"));
console.log(oscuro);
const comprobaroscuro = (paramoscuro) => {
    if (paramoscuro) {
        body.classList.add("change-color");
        check.checked = true;
    } else {
        body.classList.remove("change-color");
        check.checked = false;
    }
};
console.log(check.checked);
/*evento*/
comprobaroscuro(oscuro);
check.addEventListener("click", () => {
    console.log(check.checked);
    if (check.checked) {
        body.classList.add("change-color");
        window.localStorage.setItem("oscuro", true);
    } else {
        body.classList.remove("change-color");
        window.localStorage.removeItem("oscuro");
    }
});
