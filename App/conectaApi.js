let produtosStarWars = [];
let produtosConsole = [];
const endpointDaAPI = 'https://64b68b3fdf0839c97e15c1a5.mockapi.io/alura/geek/produto';
listaProdutos();

async function listaProdutos() {
    const conexao = await fetch(endpointDaAPI);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos
}
