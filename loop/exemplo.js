//for(inicializador; condição; contador)

for (let num = 0; num <= 10; num++) {
    console.log("eu vim Barganhar")
}
// //while - loope condicional
// let salario = 1000

// while (salario < 5000) {
//     salario += 100

//     console.log("o salário é de R$: " + salario)
// }

//do while - loop condicional
// let aumento = 1000

// do{
//     console.log("este é o seu saldo: " + aumento)
//     aumento += 100
//     aumento = 100 + aumento

// } while (aumento < 5000)
let fruta = ["manga", "laranja", "uva", "mixirica", "melancia", "goiaba"]
// console.log(fruta[3])
// console.log(fruta[5])

fruta.forEach(fruta => {
    console.log("a fruta é :" + fruta)
})
for (let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice])

    if(frutas[indice] == "uva") {
        console.log("eu gosto de" + frutas[indice])
    }
}