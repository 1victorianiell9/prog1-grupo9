let formulario = document.querySelector(".registro");
let mensaje = document.querySelector(".vic")
let email = document.querySelector(".usuario")
let password = document.querySelector(".contra")
let texto = document.querySelector(".Niell")


formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  
  if ( email.value=="") { 
     mensaje.innerHTML="<p>*Por favor completar el campo</p>"
     
  }
  if (password.value == "") {
     texto.innerHTML="<p>*Por favor completar el campo</p>"
  }
  
  window.location.href = "./login.html"; 
});

