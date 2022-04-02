var carta1 = {
  nome: "Mori Calliope",
  imagem: "https://pbs.twimg.com/media/EiHYuxtVgAEgcGr.jpg",
  atributos: {
    vida: 0,
    ataque: 8,
    amor: 4
  }
};

var carta2 = {
  nome: "Takanashi Kiara",
  imagem:
    "https://i.pinimg.com/736x/c2/45/58/c2455802a54d989caad7712fd52ce1df.jpg",
  atributos: {
    vida: 10,
    ataque: 10,
    amor: 10
  }
};

var carta3 = {
  nome: "Gawr Gura",
  imagem: "https://wallpapercave.com/uwp/uwp1613609.jpeg",
  atributos: {
    vida: 6,
    ataque: 10,
    amor: 6
  }
};

var carta4 = {
  nome: "Amelia Watson",
  imagem:
    "https://i.pinimg.com/originals/b5/8a/e9/b58ae96e3ceb4e1f68d3ba0c6cb0f8b4.jpg",
  atributos: {
    vida: 2,
    ataque: 4,
    amor: 8
  }
};

var carta5 = {
  nome: "Ninomae Ina'nis",
  imagem:
    "https://i.pinimg.com/736x/26/42/10/2642103489baa888242a951d627bc9c6.jpg",
  atributos: {
    vida: 6,
    ataque: 8,
    amor: 10
  }
};

var carta6 = {
  nome: "Ouro Kronii",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t4kLjL9WKjRB1QJcGaU1vaCt-jtpNsWtKA&usqp=CAU",
  atributos: {
    vida: 10,
    ataque: 6,
    amor: 6
  }
};

var carta7 = {
  nome: "Nanashi Mumei",
  imagem:
    "https://w0.peakpx.com/wallpaper/555/914/HD-wallpaper-anime-virtual-youtuber-nanashi-mumei-hololive-thumbnail.jpg",
  atributos: {
    vida: 2,
    ataque: 4,
    amor: 10
  }
};

var carta8 = {
  nome: "Hakos Baelz",
  imagem: "https://pbs.twimg.com/media/E9bzdMvXEAMdF6S.jpg",
  atributos: {
    vida: 2,
    ataque: 4,
    amor: 6
  }
};

var carta9 = {
  nome: "Tsukumo Sana",
  imagem:
    "https://thicc.mywaifulist.moe/waifus/40517/8a4059d41f6e7ed3b5ea8d17dc129c76ff3acdf459d28f23b51fb2cf0dc06ab9_thumb.png",
  atributos: {
    vida: 10,
    ataque: 10,
    amor: 10
  }
};

var carta10 = {
  nome: "Ceres Fauna",
  imagem: "https://pbs.twimg.com/media/E9YV4iVVgAMRmxd.jpg",
  atributos: {
    vida: 10,
    ataque: 6,
    amor: 10
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);

  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>LEZ GOOOOOOOOO, VOCÊ VENCEUU</p>";
  } else if (
    cartaMaquina.atributos[atributoSelecionado] >
    cartaJogador.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>OH NYO, você perdeu...</p>";
  } else {
    htmlResultado =
      "<p class='resultado-final'>Não acho que quem ganhar ou quem perder, nem quem ganhar nem perder, vai ganhar ou perder. Vai todo mundo perder.";
  }

  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function jogarNovamente() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = "";
  divCartaMaquina.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = "";
  divCartaJogador.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnNovoJogo").disabled = false;
}