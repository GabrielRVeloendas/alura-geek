import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criaProduto(evento) {
    evento.preventDefault();
    const image = document.querySelector("[data-imageurl]").value;
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

    await conectaApi.criaProduto(image, category, name, price, description);

    
}

formulario.addEventListener("submit", evento => criaProduto(evento));