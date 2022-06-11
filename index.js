const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Vikings.",
  "Game of Thrones",
  "The Boys.",
  "Stanger Things.",
  "PEAKY BLINDERS",
  "The Witcher.",
  "La casa De Papel.",
  "Voce tem Um Gosto meio...",
  "Irmandade.",
  "Quem Matou Sara?.",
  "Squid Game.",
  "Vis a Vis.",
  "Moon Knight.",
  "Sintonia.",
  "Loki.",
  "The Last Kingdom.",
  "Vikings: Valhalla.",
  "Seu Gosto e Mais Esquisito que o Normal.",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("!! Digite  'Indicar' !!")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}


