let menuHamburguesaContainer = document.getElementById("menuHamburguesaId");
let todoContenido= document.getElementById("todoElContenido");
let menuHambuguesaDesplegable= document.getElementById("menuDesplegable");
/* crearMenu(menuHamburguesaContainer,menuHambuguesaDesplegable); */

/* function crearMenu(menu,menuDesplegable) {
  
  let opcionesMenu= [
    {nombre:"Sobre mi", link:"#sobreMi"},
    {nombre:"Estudios", link:"#estudiosId"},
    {nombre:"Portfolio", link:"#contactoId"},
    {nombre:"Idiomas", link:"#idiomasId"},
    {nombre:"Contacto", link:"#contactoId"},
  ];


  

opcionesMenu.forEach((cadaOpcion) => {
  
  let aCreado = document.createElement("a");
  aCreado.textContent = cadaOpcion.nombre;
  aCreado.href= cadaOpcion.link;
  aCreado.className= "opcion-seleccionada";
  menu.appendChild(aCreado);
  
});


menu.classList.add("oculto");
menuDesplegable.classList.add("oculto");
} */


let btnOpcionMenu=document.querySelectorAll(".opcion-seleccionada");
btnOpcionMenu.forEach((btnOpcion) => {
  btnOpcion.addEventListener("click", () =>
    mostrarOcultar(menuHamburguesaContainer, todoContenido)
  );
});

let btnHamburguesa = document.getElementById("menuHamburguesaBtn");
/* btnHamburguesa.addEventListener("click", ()=> mostrarOcultar(menuHamburguesaContainer, todoContenido)); */

function mostrarOcultar(menu, todoContenido){
   
    menu.classList.toggle("oculto");
    menuDesplegable.classList.toggle("oculto");

    todoContenido.classList.toggle("oculto");

}



const btnCursosHtml = document.getElementById('btnCursos');
const btnIdiomasHtml = document.getElementById('btnIdiomas');
const cursosContainerHmtl = document.getElementById('cursosContainer');
const idiomasContainerHmtl = document.getElementById('idiomasContainer');

btnCursosHtml.addEventListener('click', () => switchMenu(cursosContainerHmtl, idiomasContainerHmtl, btnCursosHtml, btnIdiomasHtml));
btnIdiomasHtml.addEventListener('click', () => switchMenu(idiomasContainerHmtl, cursosContainerHmtl, btnIdiomasHtml, btnCursosHtml));

function switchMenu(showContainer, hideContainer, colored, notColored) {
  showContainer.classList.remove('oculto');
  colored.classList.add('btn-seleccionado');
  hideContainer.classList.add('oculto');
  notColored.classList.remove('btn-seleccionado');
  showContainer.classList.add('animate__animated', 'animate__bounceIn');


  setTimeout(() => {
    showContainer.classList.remove('animate__animated', 'animate__bounceIn');
  }, 1000);
}


const cursos = [
  {
    btn: 'btnVerMasDesarrollo',
    cardIconos: 'cardIconos',
    cardInfo: 'cardInfoDesarrolo',
    cardBody: 'cardBody',
    cardFlip: 'cardFlip',
    title: 'Desarrollo web',
    institute: 'CoderHouse',
    description: '08 semanas en donde se desarrollaron temas como Html5, Css3, Sass, Bootstrap, entre otros',
    iconoVerMasHtml: 'iconoVerMasDesarrollo'
  },
  {
    btn: 'btnVerMasJs',
    cardIconos: 'cardIconosJs',
    cardInfo: 'cardInfoJs',
    cardBody: 'cardBodyJs',
    cardFlip: 'cardFlipJs',
    title: 'JavaScript',
    institute: 'CoderHouse',
    description: '08 semanas en donde se desarrollaron lógica de JavaScript',
    iconoVerMasHtml: 'iconoVerMasJs'
  },
  {
    btn: 'btnVerMasReact',
    cardIconos: 'cardIconosReact',
    cardInfo: 'cardInfoReact',
    cardBody: 'cardBodyReact',
    cardFlip: 'cardFlipReact',
    title: 'React',
    institute: 'CoderHouse',
    description: '08 semanas desarrollando aplicaciones en React',
    iconoVerMasHtml: 'iconoVerMasReact'
  },
  {
    btn: 'btnVerMasWp',
    cardIconos: 'cardIconosWp',
    cardInfo: 'cardInfoWp',
    cardBody: 'cardBodyWp',
    cardFlip: 'cardFlipWp',
    title: 'Wordpress',
    institute: 'CoderHouse',
    description: '05 semanas desarrollando un Eccommerce',
    iconoVerMasHtml: 'iconoVerMasWp'
  },
];

const idiomas = [
  {
    btn: 'btnVerMasEspaniol',
    cardIconos: 'cardIconosEspaniol',
    cardInfo: 'cardInfoEspaniol',
    cardBody: 'cardBodyEspaniol',
    cardFlip: 'cardFlipEspaniol',
    title: 'Español',
    institute: 'Nivel: Nativo',
    description: '',
    iconoVerMasHtml: 'iconoVerMasEsp'
  },
  {
    btn: 'btnVerMasIngles',
    cardIconos: 'cardIconosIngles',
    cardInfo: 'cardInfoIngles',
    cardBody: 'cardBodyIngles',
    cardFlip: 'cardFlipIngles',
    title: 'Inglés',
    institute: 'Nivel: Avanzado',
    description: 'Más de 10 años de estudios y prácticas en el idioma',
    iconoVerMasHtml: 'iconoVerMasIng'
  },
  {
    btn: 'btnVerMasFrances',
    cardIconos: 'cardIconosFrances',
    cardInfo: 'cardInfoFrances',
    cardBody: 'cardBodyFrances',
    cardFlip: 'cardFlipFrances',
    title: 'Francés',
    institute: 'Nivel: Básico',
    description: 'Comprensión lectora, capacidad de comunicacón básica',
    iconoVerMasHtml: 'iconoVerMasFr'
  },
  
];


cursos.forEach(curso => {
  const btn = document.getElementById(curso.btn);
  const cardIconos = document.getElementById(curso.cardIconos);
  const cardInfo = document.getElementById(curso.cardInfo);
  const cardBody = document.getElementById(curso.cardBody);
  const cardFlip = document.getElementById(curso.cardFlip);
  const iconoVerMasHtml= document.getElementById(curso.iconoVerMasHtml)
  

  btn.addEventListener('click', () => flipCard(cardIconos, cardInfo, cardBody, cardFlip, curso.title, curso.institute, curso.description, iconoVerMasHtml));
});

idiomas.forEach(idioma => {
  const btn = document.getElementById(idioma.btn);
  const cardIconos = document.getElementById(idioma.cardIconos);
  const cardInfo = document.getElementById(idioma.cardInfo);
  const cardBody = document.getElementById(idioma.cardBody);
  const cardFlip = document.getElementById(idioma.cardFlip);
  const iconoVerMasHtml= document.getElementById(idioma.iconoVerMasHtml)
  

  btn.addEventListener('click', () => flipCard(cardIconos, cardInfo, cardBody, cardFlip, idioma.title, idioma.institute, idioma.description,iconoVerMasHtml));
});

function flipCard(cardIconos, cardInfo, cardBody, cardFlip, title, institute, description, iconoFlechaVerMas) {
  cardIconos.classList.toggle('oculto');
  cardInfo.innerHTML = `<h5 class="card-title">${title}</h5><p>${institute}</p><div class="card-iconos"><card-text>${description}</card-text></div>`;
  cardInfo.classList.toggle('oculto');
  cardBody.classList.toggle('oculto');
  cardFlip.classList.add('animate__animated', 'animate__flipInY');

  iconoFlechaVerMas.classList.toggle('fa-hand-point-right')
  iconoFlechaVerMas.classList.toggle('fa-hand-point-left')

  setTimeout(() => {
    cardFlip.classList.remove('animate__animated', 'animate__flipInY');
  }, 1000);
}


