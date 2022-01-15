document.addEventListener("DOMContentLoaded", function(){
    const pagActual = 1;

    let cuadriculas = document.querySelectorAll('.cuadricula');

    for (let index = 0; index < cuadriculas.length; index++) {
        const element = cuadriculas[index];
        if (element.id != 1 & element.id !=2 & element.id !=3) {
            element.style.display="none";
        }
       
    }

})