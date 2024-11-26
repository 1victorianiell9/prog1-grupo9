let form = document.querySelector(".busca")
let input = document.querySelector(".in");
let value = input.value

form.addEventListener("submit", function(event){
    if (value == ""){
        alert(" ");
        event.preventDefault();
    }else if (value.length < 3){
        alert("Menor a 3");
        event.preventDefault()
    }
})

