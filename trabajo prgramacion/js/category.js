
let queryString = location.search;
let id = new URLSearchParams(queryString);


id = id.get('id');


let url = "https://dummyjson.com/recipes/tags";



fetch(url)
.then(function(response){
    return response.json();
})

.then(function(data){
    let newUrl = `https://dummyjson.com/recipes/tag/${data[id]}`;

    let category = document.querySelector("#category")
    
    fetch(newUrl)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let recipes = data.recipes;
        console.log(recipes)
        let lista = "";
        for (let i = 0; i < recipes.length; i++) {
            lista+=
                `<article class="receta">
                    <img class="foto_receta" src="${recipes[i].image}" alt="">
                    <h1 class="titulo_receta">${recipes[i].name}</h1>
                    <p class="nivel_dificultad">${recipes[i].difficulty}</p>
                    <a href="'https://dummyjson.com/recipes/${i}'}" class="link_detalle">link de detalle</a>
                </article>`
        }
        console.log(lista)
        category.innerHTML = lista;
    })

    .catch(function (error) {
        return console.log(error);
    });
    
    
})

.catch(function (error) {
    return console.log(error);
});


