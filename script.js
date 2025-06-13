console.log("Página criada por Artur Toblib\nO intuito dessa página é estudar mais sobre validações de form com Javascript")

const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
        let enviarForm = true;

    if (!nome.value) {
        console.log("Nome está vazio");
        enviarForm = false;
    }

        if (!senha.value) {
        console.log("Senha está vazia");
        enviarForm = false;
    }

    if (!enviarForm){
    e.preventDefault();
    }



});


