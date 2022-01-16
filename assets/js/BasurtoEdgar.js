var paginas = document.getElementById('numpagina');
var cuadriculas = document.querySelectorAll('.cuadricula');
var select = document.getElementById('cantreg');
var selectedOption = select.options[select.selectedIndex].text;
var selectedPage = paginas.options[paginas.selectedIndex].text;

select.addEventListener('change',
    function () {
        selectedOption = this.options[select.selectedIndex].text;
    });

paginas.addEventListener('change',
    function () {
        selectedPage = this.options[paginas.selectedIndex].text;
        console.log(selectedPage*selectedOption);
        console.log((selectedPage*selectedOption) - selectedOption);

        for (let index = 0; index < cuadriculas.length; index++) {
            var element = cuadriculas[index];
            if (element.id <= (selectedPage*selectedOption) && element.id > ((selectedPage*selectedOption) - selectedOption) ) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    });

    

