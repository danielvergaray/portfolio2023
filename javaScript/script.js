let menuHamburguesaContainer = document.getElementById("menuHamburguesaId");
let todoContenido = document.getElementById("todoElContenido");
let headerIdHtml= document.getElementById('headerId');
let menuHambuguesaDesplegable = document.getElementById("menuDesplegable");
let carruselPortafolioHtml= document.getElementById('carouselExampleIndicators2');
let sobreMiIdHtml= document.getElementById('sobreMiId');
let estudiosIdHtml= document.getElementById('estudiosId');
let contactoIdHtml= document.getElementById('contactoId');

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


let btnOpcionMenu = document.querySelectorAll(".opcion-seleccionada");
btnOpcionMenu.forEach((btnOpcion) => {
  btnOpcion.addEventListener("click", () =>
    mostrarOcultar(menuHamburguesaContainer, todoContenido)
  );
});

let btnHamburguesa = document.getElementById("menuHamburguesaBtn");
/* btnHamburguesa.addEventListener("click", ()=> mostrarOcultar(menuHamburguesaContainer, todoContenido)); */

/* function mostrarOcultar(menu, todoContenido) {

  menu.classList.toggle("oculto");
  menuDesplegable.classList.toggle("oculto");

  todoContenido.classList.toggle("oculto");

} */



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
  const iconoVerMasHtml = document.getElementById(curso.iconoVerMasHtml)


  btn.addEventListener('click', () => flipCard(cardIconos, cardInfo, cardBody, cardFlip, curso.title, curso.institute, curso.description, iconoVerMasHtml));
});

idiomas.forEach(idioma => {
  const btn = document.getElementById(idioma.btn);
  const cardIconos = document.getElementById(idioma.cardIconos);
  const cardInfo = document.getElementById(idioma.cardInfo);
  const cardBody = document.getElementById(idioma.cardBody);
  const cardFlip = document.getElementById(idioma.cardFlip);
  const iconoVerMasHtml = document.getElementById(idioma.iconoVerMasHtml)


  btn.addEventListener('click', () => flipCard(cardIconos, cardInfo, cardBody, cardFlip, idioma.title, idioma.institute, idioma.description, iconoVerMasHtml));
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




const proyectos = [
  {
    titulo: 'Adivina el Número',
    descripcion: 'Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.',
    imagen: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkWeb: 'https://danielvergaray.github.io/AdivinaElNumero_juego/',
    linkRepositorio: 'https://github.com/danielvergaray/AdivinaElNumero_juego',
    linkImg1: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg2: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg3: '../imagenes/desktop/adivinaElNumero.jpeg',
  },{
    titulo: '2',
    descripcion: 'Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.',
    imagen: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkWeb: 'https://danielvergaray.github.io/AdivinaElNumero_juego/',
    linkRepositorio: 'https://github.com/danielvergaray/AdivinaElNumero_juego',
    linkImg1: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg2: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg3: '../imagenes/desktop/adivinaElNumero.jpeg',
  },
  {
    titulo: '3',
    descripcion: 'Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.',
    imagen: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkWeb: 'https://danielvergaray.github.io/AdivinaElNumero_juego/',
    linkRepositorio: 'https://github.com/danielvergaray/AdivinaElNumero_juego',
    linkImg1: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg2: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg3: '../imagenes/desktop/adivinaElNumero.jpeg',
  },
{
    titulo: '4',
    descripcion: 'Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.',
    imagen: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkWeb: 'https://danielvergaray.github.io/AdivinaElNumero_juego/',
    linkRepositorio: 'https://github.com/danielvergaray/AdivinaElNumero_juego',
    linkImg1: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg2: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg3: '../imagenes/desktop/adivinaElNumero.jpeg',
  },
  {
    titulo: '5',
    descripcion: 'Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.',
    imagen: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkWeb: 'https://danielvergaray.github.io/AdivinaElNumero_juego/',
    linkRepositorio: 'https://github.com/danielvergaray/AdivinaElNumero_juego',
    linkImg1: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg2: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg3: '../imagenes/desktop/adivinaElNumero.jpeg',
  },
  {
    titulo: '6',
    descripcion: 'Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.',
    imagen: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkWeb: 'https://danielvergaray.github.io/AdivinaElNumero_juego/',
    linkRepositorio: 'https://github.com/danielvergaray/AdivinaElNumero_juego',
    linkImg1: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg2: '../imagenes/desktop/adivinaElNumero.jpeg',
    linkImg3: '../imagenes/desktop/adivinaElNumero.jpeg',
  },
  

]


let containerInfoProyectos = document.getElementById('infoCadaProyecto');

let btnVerMasAdivinaHtml=document.getElementById('btnVerMasAdivina');
let btnVerMasMrSnackJsHtml=document.getElementById('btnVerMasMrSnackJs');
let btnVerMasPigHtml=document.getElementById('btnVerMasPig');
let btnVerMasMrSnackHtml=document.getElementById('btnVerMasMrSnack');
let btnVerMasReactHtml=document.getElementById('btnVerMasReact');
let btnVerMasWpHtml=document.getElementById('btnVerMasWp');


btnVerMasAdivinaHtml.addEventListener('click', ()=>crearCardsInfoProyectos(proyectos,containerInfoProyectos, 0))
btnVerMasMrSnackJsHtml.addEventListener('click', ()=>crearCardsInfoProyectos(proyectos,containerInfoProyectos, 1))
btnVerMasPigHtml.addEventListener('click', ()=>crearCardsInfoProyectos(proyectos,containerInfoProyectos, 2))
btnVerMasMrSnackHtml.addEventListener('click', ()=>crearCardsInfoProyectos(proyectos,containerInfoProyectos, 3))
btnVerMasReactHtml.addEventListener('click', ()=>crearCardsInfoProyectos(proyectos,containerInfoProyectos, 4))
btnVerMasWpHtml.addEventListener('click', ()=>crearCardsInfoProyectos(proyectos,containerInfoProyectos, 5))



btnVerMasAdivinaHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml, sobreMiIdHtml, estudiosIdHtml, contactoIdHtml))
btnVerMasMrSnackJsHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml, sobreMiIdHtml, estudiosIdHtml, contactoIdHtml))
btnVerMasPigHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml, sobreMiIdHtml, estudiosIdHtml, contactoIdHtml))
btnVerMasMrSnackHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml, sobreMiIdHtml, estudiosIdHtml, contactoIdHtml))
btnVerMasReactHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml, sobreMiIdHtml, estudiosIdHtml, contactoIdHtml))
btnVerMasWpHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml, sobreMiIdHtml, estudiosIdHtml, contactoIdHtml))




/* crearCardsInfoProyectos(proyectos,containerInfoProyectos) */

function crearCardsInfoProyectos(proyectos,containerInfoProyectos, index) {
console.log("crear card")

let proyectos2= proyectos[index];
console.log(proyectos2)

 /*  proyectos2.forEach(cadaProyecto => {
    
    containerInfoProyectos.innerHTML=` 

      <div id="cardIconoClose" class="card-icono-close">
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
      
      <div class="card-separador-carusel-info">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${cadaProyecto.linkImg1} " class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${cadaProyecto.linkImg2}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${cadaProyecto.linkImg3}" class="d-block w-100" alt="...">
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="cardInfo-contenedor-detalles">
          <h1>${cadaProyecto.titulo}</h1>
          <p>${cadaProyecto.descripcion} </p>
            <div class="card-info-contenedorBotones">
              <button><a href="${cadaProyecto.linkWeb} ">Visitar Web</a></button>
              <button><a href="${cadaProyecto.linkRepositorio}">Ver Repositorio</a></button>
            </div>
        </div>

      </div>
      
    `

  }) */


  containerInfoProyectos.innerHTML=` 

  <div id="cardIconoClose" class="card-icono-close">
    <i class="fa-regular fa-circle-xmark"></i>
  </div>
  
  <div class="card-separador-carusel-info">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${proyectos2.linkImg1} " class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${proyectos2.linkImg2}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${proyectos2.linkImg3}" class="d-block w-100" alt="...">
          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="cardInfo-contenedor-detalles">
      <h1>${proyectos2.titulo}</h1>
      <p>${proyectos2.descripcion} </p>
        <div class="card-info-contenedorBotones">
          <button><a href="${proyectos2.linkWeb} ">Visitar Web</a></button>
          <button><a href="${proyectos2.linkRepositorio}">Ver Repositorio</a></button>
        </div>
    </div>

  </div>
  
`


  let iconoCloseHtml= document.getElementById('cardIconoClose');
iconoCloseHtml.addEventListener('click', ()=> mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml,sobreMiIdHtml, estudiosIdHtml,contactoIdHtml ));
}



function mostrarOcultarInfoProyecto(containerInfoProyectos, headerIdHtml, carruselPortafolioHtml,sobreMiIdHtml, estudiosIdHtml,contactoIdHtml) {

  containerInfoProyectos.classList.toggle("oculto");
  headerIdHtml.classList.toggle('cortina');
  sobreMiIdHtml.classList.toggle('cortina');
  estudiosIdHtml.classList.toggle('cortina');
  contactoIdHtml.classList.toggle('cortina');
  carruselPortafolioHtml.classList.toggle('oculto')
  /* todoContenido.classList.toggle('cortina') */
  /* infoCadaProyectoHtml.classList.remove('oculto') */
  
  

}