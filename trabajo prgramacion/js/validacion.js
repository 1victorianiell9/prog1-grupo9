let form = document.querySelector(".busca")
let input = document.querySelector(".in");

form.addEventListener("submit", function(event){
    if (input.value == ""){
        alert(" ");
        event.preventDefault();
    }else if (input.value < 3){
        alert ("Mneor a 3");
        event.preventDefault()
    }
})