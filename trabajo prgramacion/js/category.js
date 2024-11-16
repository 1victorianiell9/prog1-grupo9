let url = "https://dummyjson.com/recipes";

let categories = document.querySelector(".categories");

fetch(url)

.then(function(response){
    return response.json();
})

then(function(data){
    
})