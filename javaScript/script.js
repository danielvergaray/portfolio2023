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






let btnVerMasDesarrolloHtml= document.getElementById('btnVerMasDesarrollo');
let btnVerMasJsHtml= document.getElementById('btnVerMasJs');
let btnVerMasReactHtml= document.getElementById('btnVerMasReact');
let btnVerMasWpHtml= document.getElementById('btnVerMasWp');
let cardIconos= document.getElementById("cardIconos");
let cardInfo= document.getElementById("cardInfo");
let cardBodyHtml= document.getElementById("cardBody");
let cardFlip= document.getElementById("cardFlip");
let descripcionDesarrollo= "08 semanas en donde se desarrollaron temas como Html5, Css3, Sass, Bootstrap, entre otros";
let descripcionJs= "08 semanas en donde se desarrollaron lógica de javaScript";
let descripcionReact= "Cursando actualmente (08 semanas)";
let descripcionWp= "Cursando actualmente (08 semanas)";
let coderHouse= "CoderHouse";



btnVerMasDesarrolloHtml.addEventListener('click', ()=> flipCard (cardIconos ,cardInfo, cardBodyHtml,cardFlip, "Desarrollo web" ,coderHouse, descripcionDesarrollo))
btnVerMasJsHtml.addEventListener('click', ()=> flipCard (cardIconos ,cardInfo, cardBodyHtml,cardFlip, "JavaScript" ,coderHouse, descripcionJs));



function flipCard(cardIconos ,cardInfo, cardBodyHtml,cardFlip, cardTitle, cardInstitute, cardDescription){
  
  cardIconos.classList.toggle('oculto');

  cardInfo.innerHTML = `<h5 class="card-title">${cardTitle}</h5>
  <card-text>${cardInstitute}</card-text>
  <div class="card-iconos">
  <card-text> ${cardDescription} </card-text>
  </div>`

  cardInfo.classList.toggle('oculto')
  cardBodyHtml.classList.toggle('oculto')
  cardFlip.classList.add("animate__animated", "animate__flipInY");

  setTimeout(() => {
    cardFlip.classList.remove("animate__animated", "animate__flipInY");
  }, 1000);

  


}