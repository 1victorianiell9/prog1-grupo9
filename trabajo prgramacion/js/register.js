let formulario = document.querySelector(".registro");
let mensaje = document.querySelector(".vic")
let email = document.querySelector(".usuario")
let password = document.querySelector(".contra")
let texto = document.querySelector(".Niell")
let check = document.querySelector(".terminos")
let parrafo = document.querySelector(".maga")



formulario.addEventListener("submit", function (event) {

  event.preventDefault(); 
  if ( email.value=="") { 
     mensaje.innerHTML="<p>*Por favor completar el campo</p>"
    return;
  }else if (password.value == "") {
     texto.innerHTML="<p>*Por favor completar el campo</p>"
     return;
  }else if (check.checked==false){
    parrafo.innerHTML="<p>Aceptar terminos y condiciones</p>"
    return;
  }else {
    this.submit()
  }
  
});

