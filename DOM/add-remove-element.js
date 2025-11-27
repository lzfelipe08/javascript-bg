let secao = document.getElementsByTagName("section");

let novoparagrafo = document.createElement("p");
novoparagrafo.textContent = "Paragrafo criado via JS"

secao.appendChild(novoparagrafo);