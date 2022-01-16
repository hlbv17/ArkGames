var paginas = document.getElementById('numpagina');
var cuadriculas = document.querySelectorAll('.cuadricula');
var select = document.getElementById('cantreg');
var selectedOption = select.options[select.selectedIndex].text;
var selectedPage = paginas.options[paginas.selectedIndex].text;
var next = document.getElementById('nextPage');
var previous = document.getElementById('previousPage');



select.addEventListener('change',
    function () {
        selectedOption = this.options[select.selectedIndex].text;
        actualizar();
    });

paginas.addEventListener('change',
    function () {
        selectedPage = this.options[paginas.selectedIndex].text;
        actualizar();
    });

next.addEventListener('click',
    function () {
        nextPage();
    });

previous.addEventListener('click',
    function () {
        previousPage();
    });

function actualizar() {
    for (let index = 0; index < cuadriculas.length; index++) {
        var element = cuadriculas[index];
        if (selectedOption === "Todos") {
            element.style.display = "block";
        } else {
            if (element.id <= (selectedPage * selectedOption) && element.id > ((selectedPage * selectedOption) - selectedOption)) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    }
};

function nextPage() {
    let nextPage = selectedPage++;
    //paginas.options[nextPage];
    actualizar();
};

function previousPage() {
    if (selectedPage > 1) {
        let previousPage = selectedPage--;
    //paginas.options[nextPage];
    actualizar();
    }
    
};

actualizar();


