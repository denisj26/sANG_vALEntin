const easterEgg = document.getElementById("easterEgg");


document.addEventListener("selectionchange", () => {

    const seleccion = window.getSelection().toString();

    if (seleccion.length > 10) {
        easterEgg.classList.add("show");
    } 
    else {
        easterEgg.classList.remove("show");
    }

});
