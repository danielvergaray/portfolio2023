let menuHamburguesaContainer = document.getElementById("menuHamburguesaId");
let todoContenido= document.getElementById("todoElContenido");
let menuHambuguesaDesplegable= document.getElementById("menuDesplegable");
crearMenu(menuHamburguesaContainer,menuHambuguesaDesplegable);

function crearMenu(menu,menuDesplegable) {
  /* let opcionesMenu = ["Sobre mi", "Estudios", "Portfolio", "Contacto"]; */
  let opcionesMenu= [
    {nombre:"Sobre mi", link:"#sobreMi"},
    {nombre:"Estudios", link:"#estudiosId"},
    {nombre:"Portfolio", link:"#contactoId"},
    {nombre:"Idiomas", link:"#idiomasId"},
    {nombre:"Contacto", link:"#contactoId"},
  ];


  /* opcionesMenu.forEach((cadaOpcion) => {
    let aCreado = document.createElement("a");
    aCreado.textContent = cadaOpcion;
    menu.appendChild(aCreado);
  });

  menu.classList.add("oculto");
} */

opcionesMenu.forEach((cadaOpcion) => {
  
  let aCreado = document.createElement("a");
  aCreado.textContent = cadaOpcion.nombre;
  aCreado.href= cadaOpcion.link;
  aCreado.className= "opcion-seleccionada";
  menu.appendChild(aCreado);
  
});


menu.classList.add("oculto");
menuDesplegable.classList.add("oculto");
}


let btnOpcionMenu=document.querySelectorAll(".opcion-seleccionada");
btnOpcionMenu.forEach((btnOpcion) => {
  btnOpcion.addEventListener("click", () =>
    mostrarOcultar(menuHamburguesaContainer, todoContenido)
  );
});

let btnHamburguesa = document.getElementById("menuHamburguesaBtn");
btnHamburguesa.addEventListener("click", ()=> mostrarOcultar(menuHamburguesaContainer, todoContenido));

function mostrarOcultar(menu, todoContenido){
   
    menu.classList.toggle("oculto");
    menuDesplegable.classList.toggle("oculto");

    todoContenido.classList.toggle("oculto");

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
    description: '08 semanas en donde se desarrollaron temas como Html5, Css3, Sass, Bootstrap, entre otros'
  },
  {
    btn: 'btnVerMasJs',
    cardIconos: 'cardIconosJs',
    cardInfo: 'cardInfoJs',
    cardBody: 'cardBodyJs',
    cardFlip: 'cardFlipJs',
    title: 'JavaScript',
    institute: 'CoderHouse',
    description: '08 semanas en donde se desarrollaron lógica de JavaScript'
  },
  {
    btn: 'btnVerMasReact',
    cardIconos: 'cardIconosReact',
    cardInfo: 'cardInfoReact',
    cardBody: 'cardBodyReact',
    cardFlip: 'cardFlipReact',
    title: 'React',
    institute: 'CoderHouse',
    description: 'xxx'
  },
  {
    btn: 'btnVerMasWp',
    cardIconos: 'cardIconosWp',
    cardInfo: 'cardInfoWp',
    cardBody: 'cardBodyWp',
    cardFlip: 'cardFlipWp',
    title: 'Wordpress',
    institute: 'CoderHouse',
    description: 'xxx'
  },
];

cursos.forEach(curso => {
  const btn = document.getElementById(curso.btn);
  const cardIconos = document.getElementById(curso.cardIconos);
  const cardInfo = document.getElementById(curso.cardInfo);
  const cardBody = document.getElementById(curso.cardBody);
  const cardFlip = document.getElementById(curso.cardFlip);

  btn.addEventListener('click', () => flipCard(cardIconos, cardInfo, cardBody, cardFlip, curso.title, curso.institute, curso.description));
});

function flipCard(cardIconos, cardInfo, cardBody, cardFlip, title, institute, description) {
  cardIconos.classList.toggle('oculto');
  cardInfo.innerHTML = `<h5 class="card-title">${title}</h5><card-text>${institute}</card-text><div class="card-iconos"><card-text>${description}</card-text></div>`;
  cardInfo.classList.toggle('oculto');
  cardBody.classList.toggle('oculto');
  cardFlip.classList.add('animate__animated', 'animate__flipInY');

  setTimeout(() => {
    cardFlip.classList.remove('animate__animated', 'animate__flipInY');
  }, 1000);
}