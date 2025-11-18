let nota01 = Number.perseFloat(prompt("Digite a nota em portugues"))
let nota02 = Number.perseFloat(prompt("Digite a nota em historia"))
let nota03 = Number.perseFloat(prompt("Digite a nota em matematica"))
let nota04 = Number.perseFloat(prompt("Digite a nota em ingles"))

let media = (nota01+nota02+nota03+nota04) / 4

if(media>=7){
    console.log("aprovado")
}
else if (media > 5 && media <7){
    console.log("recuperação")
}
else{
    console.log("reprovado")
}

