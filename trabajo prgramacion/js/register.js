const formulario = document.querySelector(".registro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const email = document.querySelector(".usuario").value.trim();
  const contraseña = document.querySelector(".contra").value.trim();
  const terminos = document.querySelector(".terminos").value.trim();

  if (email === "") {
    prompt("Por favor complete el campo email"); 
    return;  
  }
  if (contraseña === "") {
    prompt("Por favor complete el campo contraseña"); 
    return; 
  }
  if (terminos === "") {
    prompt("por favor ascepte los termnos y condiciones"); 
    return; 
  }
  
});

