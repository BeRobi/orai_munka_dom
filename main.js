window.addEventListener("load", init);

function init() {
    const LISTA = ["Hétfő", "Kedd", "Szerda","Csütörtök","Péntek","Szombat","Vasárnap"];
    const napok = document.getElementsByClassName("napok")[0];
    const maskepp = document.getElementsByClassName("maskepp");
    let htmlValtozo = listabaKiir(LISTA);
    let htmlValtozo1 = divKiir(LISTA);
    kiir(htmlValtozo, napok);
    kiir(htmlValtozo1, maskepp[0])
    const gombELEMEK = document.querySelectorAll(".maskepp button");
  

    /** eseménykezelő */
    
    for (let index = 0; index < LISTA.length; index++) {
        gombELEMEK[index].addEventListener("click", divHatter);
    }
    
}

function listabaKiir(LISTA) {
    let htmlValtozo = "<ul>";
    for (let index = 0; index < LISTA.length; index++) {
        htmlValtozo += `<li>${LISTA[index]}</li>`;        
    }
    htmlValtozo += "</ul>";
    return htmlValtozo;
}

function kiir(mit, hova) {
    hova.innerHTML += mit;
}

function divKiir(LISTA) {
    let htmlValtozo = "";
    for (let index = 0; index < LISTA.length; index++) {
        htmlValtozo += `<div> <p> ${LISTA[index]} </p> <button>ok</button> </div>`;
    }
    htmlValtozo += "";
    return htmlValtozo;
}

function divHatter(event){
    const ELEM = event.target.parentNode
    ELEM.classList.add("hatter")
    console.log(event.target.parentNode)
    
}
