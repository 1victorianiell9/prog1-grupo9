

let URL = "https://dummyjson.com/recipes?limit=10";


let lista_recetas = document.querySelector(".lista_recetas");


fetch(URL)
.then(function(response){
   return response.json();
})


.then(function(data){
   let recetas = "";
   let recipes = data.recipes;
   console.log(recipes)
   for(let i = 0; i<recipes.length ; i++) {
       recetas +=
       `<article class="borde">
            <article class="receta">
                <img class="foto_receta" src="${recipes[i].image}" alt="">
                <h1 class="titulo_receta">${recipes[i].name}</h1>
                <p class="nivel_dificultad">${recipes[i].difficulty}</p>
                <a href="./receta.html?id=${recipes[i].id}" class="link_detalle">Detalle</a>
            </article>
        </article>`
   };
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
   fetch(urlSkip)
   .then(function(response){
       return response.json();
   })


   .then(function(data){
       let recetas = "";
       let recipes = data.recipes;
       console.log(recipes)
       for(let i = 0; i<recipes.length ; i++) {
           recetas +=
           `<article class="borde">
                <article class="receta">
                    <img class="foto_receta" src="${recipes[i].image}" alt="">
                    <h1 class="titulo_receta">${recipes[i].name}</h1>
                    <p class="nivel_dificultad">${recipes[i].difficulty}</p>
                    <a href="./receta.html?id=${recipes[i].id}" class="link_detalle">Detalle</a>
                </article>
            </article>`
       };
       lista_recetas.innerHTML += recetas;

       if(recipes.length < 10) {
        //ocultar boton

        boton.style.display = "none";

       }
   })


   .catch(function (error) {
       return console.log(error);
   });
})
