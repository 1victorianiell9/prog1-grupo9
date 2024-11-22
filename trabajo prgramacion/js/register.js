const formulario = document.querySelector(".enter");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const email = document.querySelector(".usuario").value.trim();
  const contraseña = document.querySelector(".contra").value.trim();
  const terminos = document.querySelector(".terminos").value.trim();

  if (email === "") {
    alert("Por favor complete el campo email"); 
    return;  
  }
  if (contraseña === "") {
    alert("Por favor complete el campo contraseña"); 
    return; 
  }
  if (terminos === "") {
    alert("por favor ascepte los termnos y condiciones"); 
    return; 
  }
  window.location.href = "./index.html"; 
});

