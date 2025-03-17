// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}


function agregarAmigo(name) {

    console.log(name);

    if (lista.includes(name)) {
        asignarTextoElemento("#listaAmigos", `${name} se encuentra registrado`);
        return;
    } else {
        lista.push(name);
        asignarTextoElemento("#listaAmigos", `${name} fue agregado correctamente`);
        console.log(lista);
        document.getElementById('amigo').value = "";
        return;
    };
}

function sortearAmigo() {
    if (lista.length < 2) {
        alert(`Se necesita por lo menos dos nombres`);
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * lista.length);
    const ganador = lista[numeroAleatorio];
    asignarTextoElemento("#resultado", `El ganador del sorteo es: ${ganador}`);
}


