function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === "audio") {
      elemento.play();
    } else {
      console.log("Elemento não encontrado ou seletor inválido");
    }
  }
  //Constante para salvar lista de teclas e código para localizar essas teclas
  const listaDeTeclas = document.querySelectorAll(".tecla");
  
  //para
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    //Constante tecla para salvar a tecla clicada da listaDeTeclas
    const tecla = listaDeTeclas[contador];
  
    //Constante instrumento para salvar a segunda classe do elemento clicado da listaDeTeclas
    //(*Contagem começa em 0)
    const instrumento = tecla.classList[1];
  
    //template string, com a função de criar a constante idAudio para para linkar a tecla clicada e o
    //som que deve ser reproduzido.
    const idAudio = `#som_${instrumento}`;
  
    //Ao clicar, ativa a função tocaSom para tocar o som clicado
    tecla.onclick = function () {
      tocaSom(idAudio);
    };
  
    //funcinalidade com as teclas
    //tecla pressionada
    tecla.onkeydown = function (evento) {
      // || significa ou
      if (evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add("ativa");
      }
    };
  
    //tecla solta
    tecla.onkeyup = function () {
      tecla.classList.remove("ativa");
    };
  }