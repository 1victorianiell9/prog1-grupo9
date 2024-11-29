
let formulario = document.querySelector(".acceso");

formulario.addEventListener("submit", function (event) {
  

  let email = document.querySelector(".username").value;
  let contraseña = document.querySelector(".contraseña").value;
  
  if (email == "") {
    alert("Por favor complete el campo email"); 
    event.preventDefault(); 
    return;  
  }else if (contraseña == "") {
    alert("Por favor complete el campo contraseña"); 
    event.preventDefault(); 
    return; 
  }
   
});

