let menuHamburguesaContainer = document.getElementById("menuHamburguesaId");
let todoContenido= document.getElementById("todoElContenido");
let menuHambuguesaDesplegable= document.getElementById("menuDesplegable");
crearMenu(menuHamburguesaContainer,menuHambuguesaDesplegable);

function crearMenu(menu,menuDesplegable) {
  /* let opcionesMenu = ["Sobre mi", "Estudios", "Portfolio", "Contacto"]; */
  let opcionesMenu= [
    {nombre:"Sobre mi", link:"#sobreMi"},
    {nombre:"Estudios", link:"#estudiosId"},
    {nombre:"Portfolio", link:"#portfolioId"},
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
