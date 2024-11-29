let lista_recetas = document.querySelector(".lista_recetas");
let queryString = location.search
let search = new URLSearchParams (queryString)
 /// es lo que esta depues del ?///

search = search.get("search")
let URL = `https://dummyjson.com/recipes/search?q=${search}`



fetch(URL)
.then(function(response){
    return response.json();
})


.then(function(data){
    let recetas = "";
    let recipes = data.recipes;
    console.log(recipes)
    if (recipes.length==0){
        let mensaje = `<p class="sin_resultados">No hay resultados para su busqueda</p>`
        lista_recetas.innerHTML = mensaje
    }else{
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
    }
    
})


.catch(function (error) {
return console.log(error);


});
 
 
