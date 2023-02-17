

// let boton = document.getElementById("boton");
// let elemento = document.getElementById("lista");

// boton.addEventListener("click",()=>{
//     elemento.classList.toggle("desplazarse-listado")
// })
let boton = document.getElementById("boton");
let cerrar = document.getElementById("cerrar");
let elemento = document.getElementById("lista");

boton.addEventListener("click", () => {
  elemento.classList.toggle("desplazarse-listado");
  boton.classList.toggle("cerrar");
});