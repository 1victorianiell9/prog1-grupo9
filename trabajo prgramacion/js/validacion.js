let form = document.querySelector(".busca")
let input = document.querySelector(".in");


form.addEventListener("submit", function(event){
    let value = input.value
    if (value == ""){
        alert("El campo está vacío");
        event.preventDefault();
    }else if (value.length < 3){
        alert("tiene que escribir al menos 3 caracteres");
        event.preventDefault()
    }
})

