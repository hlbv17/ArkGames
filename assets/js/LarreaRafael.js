(
    () => {
        "use strict"; 
 
        var maestro = document.getElementsByClassName('main')[0], divslider = maestro.getElementsByClassName('div_slider')[0], slider = divslider.getElementsByClassName('slider')[0];

        var slide_actual = 0, intervalos, tiempoIntervalo = 7000;

        function iniciar() {
            disparador();
            timerSlide();
        };

        /***Inicio código control autoslide ***/
        function timerSlide() {
            clearInterval(intervalos);
            intervalos = setInterval(() => {
                disparador();

            }, tiempoIntervalo);
        }
        function randmonSlide() {
            return Math.floor(Math.random() * 4);
        }
        function disparador() {
            let tmp = slide_actual;
            while (tmp == slide_actual) {
                tmp = randmonSlide();
            }
            slide_actual = tmp;
            establecer_slide(slide_actual);
            
        }
        function establecer_slide(index) {
            console.log(slider.childElementCount);
            for (let i = 0; i < slider.childElementCount; i++) {
                let element = slider.children[i];
                if (i == index) { element.style.opacity = 1; }
                else { element.style.opacity = 0; }
            }
        }
        /***Fin Código control autoslide ***/


        class Catalogo 
        {
            constructor(nombre, precio, img_uri, isOferta) {
            this.nombre = nombre;
            this.precio = precio;
            this.img_uri = img_uri;
            this.isOferta=isOferta;
           }
        }


















        iniciar();


    }
  )
  ();