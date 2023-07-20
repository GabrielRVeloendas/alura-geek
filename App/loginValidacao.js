const validacao = document.querySelectorAll("[data-loginbtn]");

validacao.forEach(btn => {
  btn.addEventListener("click", validacaoLogin);
});

function validacaoLogin(event) {
  event.preventDefault();
  window.location.href = "../adicionar__produto.html";
}
