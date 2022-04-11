function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmDolar = valorEmReal * 0.2;
  console.log(valorEmDolar);
  var valorFinal = valorEmDolar.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é $ " + valorFinal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterIene() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmIene = valorEmReal * 23.73;
  console.log(valorEmIene);
  var valorFinal = valorEmIene.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em iene é ¥ " + valorFinal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmEuro = valorEmReal * 0.18;
  console.log(valorEmEuro);
  var valorFinal = valorEmEuro.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em euro é € " + valorFinal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmBitcoin = valorEmReal * 0.0000047;
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em bitcoin é ₿ " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}
