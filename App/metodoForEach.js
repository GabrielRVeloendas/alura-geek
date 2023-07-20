const elementoParaInserirProdutosStarWars = document.getElementById('elementoProdutoStarWars');
const elementoParaInserirProdutosConsoles = document.getElementById('elementoProdutoConsole');

function exibirOsProdutosNaTelaStarWars(listaDeProdutos) {
    listaDeProdutos.forEach((produtoStarWars, index) => {
        if (index < 6) {
            elementoParaInserirProdutosStarWars.innerHTML += `
                <li class="main__container--produtos">
                    <img src="${produtoStarWars.imageURL}" alt="">
                    <h3 class="produtos__nome">${produtoStarWars.name}</h3>
                    <h3 class="produtos__preco">R$ ${produtoStarWars.price.toFixed(2)}</h3>
                    <a href="./">Ver Produto</a>
                </li>
            `;
            if (index > 4) {
                let listaProdutosOverflow = elementoParaInserirProdutosStarWars.querySelectorAll('.main__container--produtos');
                let ultimosProdutos = Array.from(listaProdutosOverflow).slice(-2);
                ultimosProdutos.forEach(produto => produto.classList.add('overflow'));
            }
        }
    });
}

function exibirOsProdutosNaTelaConsole(listaDeProdutos) {
    listaDeProdutos.forEach((produtoConsole, index) => {
        if (index < 6) {
            elementoParaInserirProdutosConsoles.innerHTML += `
                <li class="main__container--produtos">
                    <img src="${produtoConsole.imageURL}" alt="">
                    <h3 class="produtos__nome">${produtoConsole.name}</h3>
                    <h3 class="produtos__preco">R$ ${produtoConsole.price.toFixed(2)}</h3>
                    <a href="./">Ver Produto</a>
                </li>
            `;
        }
        if (index > 4) {
            let listaProdutosOverflow = elementoParaInserirProdutosConsoles.querySelectorAll('.main__container--produtos');
            let ultimosProdutos = Array.from(listaProdutosOverflow).slice(-2);
            ultimosProdutos.forEach(produto => produto.classList.add('overflow'));
        }
    });
}