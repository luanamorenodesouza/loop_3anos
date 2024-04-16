
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("QUAL O PAIS COM O MIOR PIB?");

    
    if (respostaTime.toLowerCase() === " ESTADOS UNIDOS  ") {
      alert("26,9 trilhoẽs de doláres ");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
