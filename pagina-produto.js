const parametros = new URLSearchParams(window.location.search);

const idProduto = parametros.get("id");

const produtoEncontrado = window.produtos.find(function(produto) {
  return produto.id == idProduto;
});

    // CRIA AS IMAGENS DO CARROSSEL
const trackContainer = document.querySelector(".carousel-track");

produtoEncontrado.carousel.forEach(function(caminhoImagem) {

    const slide = document.createElement("div");

    slide.classList.add("carousel-item");

    const img = document.createElement("img");

    img.src = caminhoImagem;

    img.alt = produtoEncontrado.titulo;

    slide.appendChild(img);

    trackContainer.appendChild(slide);

});

    // ADICIONA O TÍTULO DO PRODUTO
const titulo = document.querySelector(".info-title");

titulo.textContent = produtoEncontrado.titulo;

    // ADICIONA O PREÇO DO PRODUTO
const preco = document.querySelector("#preco-produto");

preco.textContent = produtoEncontrado.preco;

    // ADICIONA O RANKING DO PRODUTO
const iconRanking = document.querySelector("#icon-ranking");

iconRanking.src = produtoEncontrado.iconRanking;

const ranking = document.querySelector("#ranking");

ranking.textContent = produtoEncontrado.ranking;

    // ADICIONA OS LINKS DOS BOTÕES DE COMPRA
const btnZap = document.querySelector(".botao-zap");

btnZap.href = produtoEncontrado.btnZap;

const btnMl = document.querySelector(".botao-ml");

btnMl.href = produtoEncontrado.btnMl;
