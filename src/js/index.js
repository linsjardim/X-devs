const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  removerClasseSelecionado();

  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  removerClasseSelecionado();

  cartaoAtual--;
  mostrarCartao();
});

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function removerClasseSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
