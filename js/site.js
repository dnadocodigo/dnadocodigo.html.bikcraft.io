// Ativar link do Menu
const links = document.querySelectorAll(".header-menu a");

function linkAtivo(link){
  const urls = location.href;
  const hrefs = link.href;

  if(urls.includes(hrefs)){
    link.classList.add("ativo");
  }
};
links.forEach(linkAtivo);

//Ativar link do Orçamento

const parametros = new URLSearchParams(location.search);


function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked= true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function perguntasClicada(event){
 const perguntaClicada = event.currentTarget;
 const controls = perguntaClicada.getAttribute("aria-controls");
 const resposta = document.getElementById(controls);

 resposta.classList.toggle('ativo');
 const ativado = resposta.classList.contains("ativo");
 perguntaClicada.setAttribute("aria-expanded", ativado)
 console.log(controls);
}
function perguntaSelecionada(pergunta){
 pergunta.addEventListener('click', perguntasClicada);
}
perguntas.forEach(perguntaSelecionada);


//Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
 const img = event.currentTarget;
 const media =  matchMedia("(min-width: 1000px)").matches;

 if(media){
   galeriaContainer.prepend(img);
 }
}
function eventoGaleria(img){
  img.addEventListener('click', trocarImagem)
}
galeria.forEach(eventoGaleria);

// Ativação do plugin
if(window.SimpleAnime){
  new SimpleAnime();
}