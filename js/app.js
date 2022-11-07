import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach((input) => {    
    input.addEventListener('blur', (input) => {        
        valida(input.target);
    })
})

textArea.addEventListener('blur', (textArea) => {
    valida(textArea.target)
})


// Boton Volver Top

let mybutton = document.getElementById("myBtn");

mybutton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


