function iniciar() {
  servidores_Load();
};

class Servidores {
  constructor(id, nombre, modoValidacion) {
    this.id = id;
    this.nombre = nombre;
    this.modoValidacion = modoValidacion;
  }
}

var objServidores = new Array(
  new Servidores(0, "E.E.U.U. - California", "user"),
  new Servidores(1, "E.E.U.U. - Miami", "user"),
  new Servidores(2, "America del Sur", "mail"),
  new Servidores(3, "Europa - Oriente", "user"),
  new Servidores(4, "Europa - Occidente", "user"),
  new Servidores(5, "Asia -  Central", "mail"),
  new Servidores(6, "Otros", "mail"),
);

/***  ***/


function servidores_Load() {
  let lst = document.getElementById('regiones');

  const fragment = document.createDocumentFragment();
  objServidores.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.id = "servidor" + item.id;
    option.text = item.nombre;
    fragment.appendChild(option);
  });

  lst.appendChild(fragment);
};

function servidores_ActivarCampos(item) {
  let divUsuario = document.getElementById('divUser');
  let divMail = document.getElementById('divEmail');
  let inputMail = document.getElementById('email-ingreso');
  let inputUsuario = document.getElementById('txt-ingreso'); 

  let valorEncontrado = objServidores.find(function (obj) {
    return obj.id ==  item.value ; 
  }); 

  switch (valorEncontrado.modoValidacion) {
    case "mail":
      divMail.style = "visibility: visible;  display: inherit;";
      divUsuario.style = "visibility: collapse; display:none;";
      
      inputMail.required = true;
      inputUsuario.required = false;
      break;
    case "user":
      divMail.style = "visibility:collapse ; display:none;";
      divUsuario.style = "visibility:visible ;  display: inherit;";
      
      inputMail.required = false;
      inputUsuario.required = true;
      break;
    default:
      break;
  }

};

function formulario_click() {

};

iniciar(); 