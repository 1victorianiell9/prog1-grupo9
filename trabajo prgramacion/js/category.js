let url = "https://dummyjson.com/recipes";

let categories = document.querySelector(".categories");

fetch(url)

.then(function(response){
    return response.json();
})

.then(function(data){

    let recetas = "";
    
    console.log(data)
    for(let i =0; i<30 ; i++) {
        recetas +=
        `<article class="receta">
            <img class="foto_receta" src="${recipes[i].image}" alt="">
            <h1 class="titulo_receta">${recipes[i].name}</h1>
            <p class="nivel_dificultad">${recipes[i].difficulty}</p>
            <a href="'https://dummyjson.com/recipes/${i}'}" class="link_detalle">link de detalle</a>
        </article>`
    };

    lista_recetas.innerHTML = recetas;

})