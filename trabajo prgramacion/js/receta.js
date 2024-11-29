let queryString = location.search;
let id = new URLSearchParams(queryString);

id = id.get("id");


let URL = `https://dummyjson.com/recipes/${id}`

let div = document.querySelector("#recipe")

fetch(URL)
.then(function(response){
   return response.json();
})

.then(function(data){
   console.log(data)
   let detalle = "";
   detalle =
   
   `<section class="kiku">
        <h1 class="titulo_home">
            ${data.name}
        </h1>
    </section>
   <p class="delfi">Instruciones </p>      `
   let instrucciones = ""
   for (i=0; i<(data.instructions).length; i++){
      instrucciones+= `<li>${data.instructions[i]}</li>`
   }
   detalle += `<ul class="listrec">${instrucciones}</ul>`
   detalle +=
   `

   <p class="delfi">Prep time:${data.prepTimeMinutes}</p>
   <img class="img_receta" src="${data.image}" alt="">
   
   `
   let tags = ""
   for (i=0; i<(data.tags).length; i++){
      tags+= `<li><a href="./category.html?tag=${data.tags[i]}">${data.tags[i]}
      </a></li>`
   }
   detalle += `<ul>${tags}</ul>`
   
   div.innerHTML = detalle;
})


.catch(function (error) {
   return console.log(error);


});
