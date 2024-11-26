
const formulario = document.querySelector(".acceso");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.querySelector(".username").value.trim();
  let contraseña = document.querySelector(".contraseña").value.trim();

  if (email === "") {
    alert("Por favor complete el campo email"); 
    return;  
  }
  if (contraseña === "") {
    alert("Por favor complete el campo contraseña"); 
    return; 
  }
  window.location.href = "./index.html"; 
});

// primero hay que elegir el formulario que puse en el html
// hay que evitar que el formulario se mande directo por si no completo bien todo 
 // usamos lo que puso en contraeña y en usuario
// Ver si lo completo 
// si no lo completa avisarle 
// frenar para que no pueda avanzar a la otra pagina 
 // repetir los pasos del email  
 // Si todo está bien,cambiamos de página