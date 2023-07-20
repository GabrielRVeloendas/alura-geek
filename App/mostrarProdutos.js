import { conectaApi } from "./conectaApi.js";

const lista = document.querySelectorAll(".elementoProduto");

function constroiCard(imageURL, name, price) {
    const produto = document.createElement("li");
    produto.className = "main__container--produtos";
    produto.innerHTML = `
    <li class="main__container--produtos">
        <img src="${imageURL}" alt="">
        <h3 class="produtos__nome">${name}</h3>
        <h3 class="produtos__preco">R$ ${price.toFixed(2)}</h3>
        <a href="./">Ver Produto</a>
    </li>
    `
    return produto;
}

async function listaProduto() {
    const listaProdutos = document.querySelectorAll(".elementoProduto");
    for (const lista of listaProdutos) {
      const listaApi = await conectaApi.listaProdutos();

      let cardCount = 0; 
      listaApi.forEach((elemento) => {
        if(cardCount < 6) {
            const card = constroiCard(elemento.imageURL, elemento.name, elemento.price);
            lista.appendChild(card);
            cardCount++;
            if(cardCount > 4) {
                card.classList.add("overflow");
            }
        }
      }
      );
    }
  }
  
  listaProduto();