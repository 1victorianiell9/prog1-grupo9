
let queryString = location.search;
let tag = new URLSearchParams(queryString);


tag = tag.get('tag');

console.log(tag)


let Url = `https://dummyjson.com/recipes/tag/${tag}`;

let category = document.querySelector("#category")

fetch(Url)
.then(function(response){
return response.json();
})

.then(function(data){
    let recipes = data.recipes;
    console.log(recipes)
    let lista = "";
    lista += `
        <h1 class="tituCate">Recetas de la categoría: ${tag}</h1>`
    for (let i = 0; i < recipes.length; i++) {
        lista+=
            `<article class="borde">
                    <article class="receta">
                        <img class="foto_receta" src="${recipes[i].image}" alt="">
                        <h1 class="titulo_receta">${recipes[i].name}</h1>
                        <p class="nivel_dificultad">${recipes[i].difficulty}</p>
                        <a href="./receta.html?name=${recipes[i].name}" class="link_detalle">Detalle</a>
                    </article>
                </article>`
    }
    console.log(lista)
    category.innerHTML = lista;
})

.catch(function (error) {
return console.log(error);
});


