
let formulario = document.querySelector(".acceso");

formulario.addEventListener("submit", function (event) {
  

  let email = document.querySelector(".username").value;
  let contrasena = document.querySelector(".contrasena").value;
  event.preventDefault(); 
  if (email == "") {
    alert("Por favor complete el campo email"); 
    return;  
  }else if (contrasena == "") {
    alert("Por favor complete el campo contraseña"); 
    return; 
  }else {
    this.submit()
  }
   
});

