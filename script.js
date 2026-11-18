// PROCURA A CLASSE QUE VAI RECEBER OS CARDS NO HTML
const lista = document.querySelector(".lista-produtos");

// CRIA UMA FUNÇÃO PARA GERAR OS CARDS AUTOMATICAMEMTE NA PAGINA
window.produtos.forEach(function(produto) {

  // CRIA UM ARTICLE DENTRO DA PAGINA
  const card = document.createElement("article");

  // ADICIONA O ESTILO AO ARTICLE DO CSS
  card.classList.add("card-produto");
 
  // CRIA O CORPO DO CARD COM OS DADOS QUE SERAO GERADOS NA LISTA
  card.innerHTML += `
<div class="imgcard-container">
<img src="${produto.imagemCard}" class="produto-imagem" alt="Imagem do produto">
</div>
<div class="produto-conteudo">

<h3 class="produto-titulo">${produto.titulo}</h3>

<p class="produto-preco">R$${produto.preco}</p>

<div class="container-ranking">
  <img src="${produto.iconRanking}" class="icon-ranking" alt="Indicador de ranking">
  <p class="produto-ranking">${produto.ranking}</p>
</div>

</div>

<a href="pagina-produto.html?id=${produto.id}" class="botao-produto">Ver detalhes</a>
`;

  // COLOCA OS CARDS DENTRO DA LISTA NA PAGINA
  lista.appendChild(card);
}); 
