var grolia = {
  nome: "Gloria",
  vitorias: 2,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var gabu = { nome: "Gabu", vitorias: 0, empates: 0, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

grolia.pontos = calculaPontos(grolia);
gabu.pontos = calculaPontos(gabu);

var jogadores = [];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button</td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button</td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button</td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarNome() {
  var nome = document.getElementById("nome");
  jogadores.push({
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  exibeJogadoresNaTela(jogadores);
}

function removerNome() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}

function limparNome() {
  for (var a = 0; a < jogadores.length; a++) {
    jogadores[a].vitorias = 0;
    jogadores[a].empates = 0;
    jogadores[a].derrotas = 0;
    jogadores[a].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}