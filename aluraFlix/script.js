var listaAnimes = [
  "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2020/11/nova-imagem-promocional-e-elenco-da-serie-anime-de-Horimiya-1.jpg?resize=514%2C750&ssl=1",
  "https://www.themoviedb.org/t/p/original/vHdVU0HyyB6k6kuYt8qjwTz9one.jpg",
  "https://ae01.alicdn.com/kf/H35ce516ee6b94342b02e8a943606a8beu/P-ster-de-anime-anohana-para-decora-o-de-parede-decorativo-retr-vintage-de-desenhos-animados.jpg",
  "https://images.discerningassets.com/image/upload/c_fit,h_1000,w_1000/c_fit,fl_relative,h_1.0,l_deco_watermark,o_40,w_1.0/v1495039404/josuke4_axu8hs.jpg",
  "https://img.betaseries.com/aQ392s9eRwZAHL3KaVvHtPJSboo=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F892b70b96ec118affd76705857bb586b.jpg",
  "https://cf.shopee.com.br/file/ab4fb5de130599f9681ddeab65b42e5b",
  "https://m.media-amazon.com/images/M/MV5BYTUzM2YyNGYtYTY4ZS00MDVmLWIyYWMtYmU3MDgxZDU1NjU4XkEyXkFqcGdeQXVyMTI4MTE3MTY4._V1_.jpg",
  "https://ptanime.com/wp-content/uploads/2016/07/Yuri-on-Ice-Poster-Promocional-v2.jpeg",

  "https://sucodemanga.com.br/wp-content/uploads/2021/11/attack-on-titan-final-season-part-2-poster.jpg",
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/1/915520211216-uau-posters-tokyo-revengers-animes-2.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BOWExOTEzZWYtYWJhMS00OTM5LWI1M2EtODZiYzE4ZDQ4ZGJkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  "https://akibamarket.com/wp-content/uploads/2020/08/devil-man-copia.jpg",
  "https://www.themoviedb.org/t/p/original/fnHBwIKxwrFleSzvHzTqcAzDRM.jpg",
  "https://s2.gaming-cdn.com/images/products/6325/271x377/game-steam-kill-la-kill-if-cover.jpg",
  "https://m.media-amazon.com/images/I/61k3qe5zitL._AC_SY741_.jpg"
];

var nomeAnimes = [
  "Horimiya",
  "Kimi no Suizou wo Tabetai",
  "Ano Hana",
  "JOJO's Bizarre Adventures",
  "Haikyuu",
  "Banana Fish",
  "SK8 The Infinity",
  "Yuri on Ice",
  "Attack on Titan",
  "Tokyo Revengers",
  "Fullmetal Alchemist Brotherhood",
  "Death Parade",
  "Devilman Crybaby",
  "Ajin",
  "Kill la Kill",
  "Death Note"
];

for (var indice = 0; indice < listaAnimes.length; indice++) {
  document.write(
    "<div class='animes'><a href=" +
      "><img src=" +
      listaAnimes[indice] +
      "><p>" +
      nomeAnimes[indice] +
      "</p></div>"
  );
}

function adicionarAnimes() {
  var campoImagemAnimes = document.querySelector("#imagemAnimes");
  var campoNomeAnimes = document.querySelector("#nomeAnimes");

  var imagemAnimes = campoImagemAnimes.value;
  var nomeAnimes = campoNomeAnimes.value;

  listarImagemAnimesNaTela(imagemAnimes, nomeAnimes);
}

function listarImagemAnimesNaTela(imagemAnimes, nomeAnimes) {
  var listaAnimes = document.querySelector("#listaAnimes");
  var elementoImagemAnimes =
    "<div class='animes'><a href=" +
    " target=_blank><img src=" +
    imagemAnimes +
    "</a><p>" +
    nomeAnimes +
    "</p></div>";
  listaAnimes.innerHTML = listaAnimes.innerHTML + elementoImagemAnimes;
}
