let queryString = location.search;
let id = new URLSearchParams(queryString);

id = id.get(id);

id = id+1

let URL = `https://dummyjson.com/recipes/${id}`

let div = document.querySelector("#recipe")

fetch(URL)
.then(function(response){
   return response.json();
})

.then(function(data){
   let detalle = "";
   console.log(data)
       detalle =
       
       `<h1>${data.name}</h1>`
       let instrucciones = ""
       for (i=0; i<(data.instructions).length; i++){
            instrucciones+= `<li>${data.instructions[i]}</li>`
       }
       detalle += `<ul>${instrucciones}</ul>`
       detalle +=
       `
        <p class="tiempo">${data.prepTimeMinutes}</p>
        <img src="${data.image}" alt="">
        <p class="cat">${data.tags}</p>
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
