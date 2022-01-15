/*BOTON PARA DIRIGIRSE ARRIBA DE LA PAGINA*/
let btnArriba = document.getElementById("flecha_arriba");
btnArriba.style.visibility = 'hidden';
document.addEventListener("scroll", scroll);

function scroll(){
    var pagina = document.querySelector("html");
    var x = pagina.scrollTop;
    if(x >= 0 && x <= 20 ){
    btnArriba.style.visibility='hidden';
    }else{
        btnArriba.style.visibility='visible';
    }
};


btnArriba.addEventListener("click", function() {
    window.scrollTo(0, 0)
});


/*CONTROL DE GALERIA DE VIDEO*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider_section")[0];
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft="0";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft="-100%";
    },500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 5000);


/*EFECTO DE CAMBIAR IMG POR CATEGORIA ENCIMA */
