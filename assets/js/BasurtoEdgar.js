var pagActual = 1;
var selectedOption = document.getElementById('cantreg').value;
var cuadriculas = document.querySelectorAll('.cuadricula');
var totalPaginas = cuadriculas.length / selectedOption;

var select = document.getElementById('cantreg');
select.addEventListener('change',
    function () {
        selectedOption = this.options[select.selectedIndex].text;
        actualizar();
        console.log(totalPaginas);
    });

function actualizar() {
    for (let index = 0; index < cuadriculas.length; index++) {
        const element = cuadriculas[index];
        if (element.id != 1 & element.id != 2 & element.id != 3) {
            element.style.display = "none";
        }

    }
}

actualizar();
console.log(totalPaginas);

