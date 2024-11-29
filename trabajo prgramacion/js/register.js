let formulario = document.querySelector(".registro");
let mensaje = document.querySelector(".vic")
let email = document.querySelector(".usuario")
let password = document.querySelector(".contra")
let texto = document.querySelector(".Niell")
let check = document.querySelector(".terminos")
let parrafo = document.querySelector(".maga")



formulario.addEventListener("submit", function (event) {

  
  if ( email.value=="") { 
     mensaje.innerHTML="<p>*Por favor completar el campo</p>"
     event.preventDefault();
    return;
  }else if (password.value == "") {
     texto.innerHTML="<p>*Por favor completar el campo</p>"
     event.preventDefault();
     return;
  }else if (check.checked==false){
    parrafo.innerHTML="<p>Aceptar terminos y condiciones</p>"
    event.preventDefault()
    return;
  }
  
  

});

