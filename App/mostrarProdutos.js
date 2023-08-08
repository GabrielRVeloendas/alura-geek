import { conectaApi } from "./conectaApi.js";

/* const lista = document.querySelectorAll(".elementoProduto"); */

function constroiCard(imageURL, name, price, id) {
    const produto = document.createElement("li");
    produto.className = "main__container--produtos";
    produto.innerHTML = `
        <img src="${imageURL}" alt="">
        <h3 class="produtos__nome">${name}</h3>
        <h3 class="produtos__preco">R$ ${parseFloat(price)}</h3>
        <a href="./">Ver Produto</a>
    `
    return produto;
}

function constroiCardTodos(imageURL, name, price, id) {
  const produto = document.createElement("li");
  produto.className = "main__container--produtos";
  produto.innerHTML = `
                <img src="${imageURL}" alt="">
                <div class="icons--produtos">
                    <img src="./Imagens/icons/lixo.svg" alt="" class="icon lixo">
                    <img src="./Imagens/icons/caneta.svg" alt="" class="icon caneta">
                </div>
                <h3 class="produtos__nome produtos__nome__todos">${name}</h3>
                <h3 class="produtos__preco">R$ ${parseFloat(price)}</h3>
                <h3 class="produtos__id">#${id}</h3>
            `
    return produto
}

async function listaProduto() {
    const listaProdutos = document.querySelectorAll(".elementoProduto");
    for (const lista of listaProdutos) {
      const listaApi = await conectaApi.listaProdutos();

      let cardCount = 0; 
      listaApi.forEach((elemento) => {
        if(cardCount < 6) {
            const card = constroiCard(elemento.imageURL, elemento.name, elemento.price, elemento.id);
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


  async function listaTodosProdutos() {
    const listaTodosProdutos = document.querySelector(".todos__lista"); 
    const listaApi = await conectaApi.listaProdutos();

    listaApi.forEach((elemento) => {
      const card = constroiCardTodos(elemento.imageURL, elemento.name, elemento.price, elemento.id);
      listaTodosProdutos.appendChild(card);
    });
  }
  
  listaTodosProdutos();


