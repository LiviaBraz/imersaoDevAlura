const numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 0;
const textoDeTentativas = document.getElementById("attempts");
const numDeTentativas = document.getElementById("numero").value;
const elementoResultado = document.getElementById("resultado");

function Chutar() {
  const chute = parseInt(document.getElementById("valor").value);
  tentativas = tentativas + 1;

  if (tentativas <= 3) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "PARABÉNSSS! Você acertou!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "TSC TSC, só são válidos números de 0 a 10";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "OH NOOOOOO... Tenta outra vez, o número secreto é MAIOR que este.";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "OH NOOOOOO... Tenta outra vez, o número secreto é MENOR que este.";
    }

    textoDeTentativas.innerHTML = "Tentativa " + tentativas + "/3";
  }

  if (tentativas == 3 && chute != numeroSecreto) {
    elementoResultado.innerHTML =
      "OH NOOOOOO... Não foi dessa vez, suas chances acabaram ToT . O número secreto era " +
      numeroSecreto;
    textoDeTentativas.innerHTML = "Tentativa " + tentativas + "/3";
  }
}