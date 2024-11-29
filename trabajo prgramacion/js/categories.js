let url = "https://dummyjson.com/recipes/tags";

let categories = document.querySelector(".categories");

fetch(url)

.then(function(response){
    return response.json();
})

.then(function(data){

    let tags = "";
    for(let i =0; i < data.length ; i++) {
        tags +=
        `
        <li><a href="./category.html?tag=${data[i]}">${data[i]}</a></li>
        `
    };

    categories.innerHTML = tags;

})

.catch(function (error) {
    return console.log(error);

});