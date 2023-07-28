const endpointDaAPI = 'https://64b68b3fdf0839c97e15c1a5.mockapi.io/alura/geek/produto';
listaProdutos();

async function listaProdutos() {
    const conexao = await fetch(endpointDaAPI);
    const conexaoConvertida = await conexao.json();

    console.table(conexaoConvertida);
    return conexaoConvertida;
}

async function criaProduto (imageURL, category, name, price, description) {
    const conexao = await fetch(endpointDaAPI, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageURL: imageURL,
            category: category,
            name: name,
            price: price,
            description: description
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criaProduto
}
