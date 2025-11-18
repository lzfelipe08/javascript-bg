//alert - apresenta uma mensagem
// window.alert("Ola turma do borges")
// //confirm - Pergunta com ok/ cancela (retorna um true ou false)
// window.confirm("O honas vai casar")
// //prompt - pega o texto da tela
// window.prompt("Qual o seu nome?")

//comentario em linha
/*
comentario em texto
*/

// console.log("multimidia")

// let nome = prompt("informe o seu nome: ")

// console.log("Bem vindo!" + nome)

// let numero1 = prompt("Digite o primeito numero: ")
// let numero2 = prompt("Digite o segundo numero: ")

// let result = numero1 + numero2

// let numero1 = Number.parseInt(prompt("Digite o primeito numero: "))
// let numero2 = Number.parseInt(prompt("Digite o segundo numero: "))

// let resultado = numero1 + numero2

// console.log(resultado)

let numero1 = Number.parseFloat(prompt("Digite o primeito numero: "))
let numero2 = Number.parseFloat(prompt("Digite o segundo numero: "))

let resultado = numero1 + numero2

console.log(resultado)

let idade = window.prompt("qual sua idade?")

if (idade > +18) {
    console.log("maior de idade! Detalhee")
} {
    console.log("você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("maior de idade")
        break;
    case "27":
        console.log("esta perto dos 30")
        break;
    default:
        console.log("nada a dizer")
        break;
}