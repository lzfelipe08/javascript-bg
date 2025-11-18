let login = prompt("informe o seu usuario:")
let senha = window.prompt("informe sua senha")

if (login == "admin" && senha == "senha123") {
    console.log("login bem sucedido!")
}

else {
    console.log("você não tem permissão de acesso")
}