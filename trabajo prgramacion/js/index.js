let URL = "https://dummyjson.com/recipes";

let lista_recetas = document.querySelector(".lista_recetas");

fetch(URL)
.then(function(response){
    return response.json();
})

.then(function(data){
    let recetas = "";
    let recipes = data.recipes;
    for(let i =0; i<30 ; i++) {
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