let URL = "https://dummyjson.com/recipes";


let lista_recetas = document.querySelector(".lista_recetas");


fetch(URL)
.then(function(response){
   return response.json();
})


.then(function(data){
   let recetas = "";
   let recipes = data.recipes;
   for(let i = 0; i<10 ; i++) {
       recetas +=
       `<article class="receta">
           <img class="foto_receta" src="${recipes[i].image}" alt="">
           <h1 class="titulo_receta">${recipes[i].name}</h1>
           <p class="nivel_dificultad">${recipes[i].difficulty}</p>
           <a href="'https://dummyjson.com/recipes/${i}'}" class="link_detalle">link de detalle</a>
       </article>`
   };
   console.log(recetas)
   lista_recetas.innerHTML = recetas;
})


.catch(function (error) {
   return console.log(error);


});


boton = document.querySelector(".skip")
let skip = 0
boton.addEventListener("click", function (event){
   event.preventDefault();
   skip+=10
   let urlSkip = `https://dummyjson.com/recipes?limit=10&skip=${skip}&select=name,image`;
   fetch(URL)
   .then(function(response){
       return response.json();
   })


   .then(function(data){
       let recetas = "";
       let recipes = data.recipes;
       for(let i = 10; i<recipes.length ; i++) {
           recetas +=
           `<article class="receta">
               <img class="foto_receta" src="${recipes[i].image}" alt="">
               <h1 class="titulo_receta">${recipes[i].name}</h1>
               <p class="nivel_dificultad">${recipes[i].difficulty}</p>
               <a href="'https://dummyjson.com/recipes/${i}'}" class="link_detalle">link de detalle</a>
           </article>`
       };
       console.log(recetas)
       lista_recetas.innerHTML += recetas;
   })


   .catch(function (error) {
       return console.log(error);
   });
})
