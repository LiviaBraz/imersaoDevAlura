const types= {
    electro:"https://i.postimg.cc/7hdFhpxC/electro.png",
    pyro:"https://i.postimg.cc/DfRf8Npd/pyro.png",
    hydro:"https://i.postimg.cc/FzS4y9Cb/hydro.png",
    geo:"https://i.postimg.cc/rmB6FByD/geo.png",
    dendro:"https://i.postimg.cc/15cxs7kz/dendro.png",
    cryo: "https://i.postimg.cc/X7WhHcr6/cryo.png",
    anemo: "https://i.postimg.cc/D0PCkHSk/anemo.png",
}

const deck = [
  
    {nome: "Albedo", atributo:{vida: 1030, ataque: 20, defesa: 68}, rarity:"legend" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/ysoUYZ6PBZIAAAAC/albedo.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "001"},
    
    {nome: "Aloy", atributo:{vida: 848, ataque: 18, defesa: 53}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://media.discordapp.net/attachments/711841818249134120/955918582611591220/aloy.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "002"},
  
    {nome: "Amber", atributo:{vida: 793, ataque: 19, defesa: 50}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/0vHyvgJbnYcAAAAd/amber-genshin.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "003"},

    {nome: "Itto", atributo:{vida: 1001, ataque: 18, defesa: 75}, rarity:"legend" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/8xsBcfU6GaYAAAAC/itto-arataki-itto.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "004"},
  
    {nome: "Barbara", atributo:{vida: 821, ataque: 13, defesa: 56}, rarity:"default" ,type: "hydro", fraqueza: "cryo",  img:"https://64.media.tumblr.com/a12a167bb0817cce56b4bab11eee7027/135abbc2bfa5dc6e-bd/s540x810/bb728751ccbac1df261077a3fd5a1e9b5032c548.gifv", imgType: types.hydro, imgFraqueza: types.cryo, number: "005"},
    
    {nome: "Beidou", atributo:{vida: 1094, ataque: 19, defesa: 54}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/6LI7tizDTsoAAAAd/beidou.gif", imgType: types.electro, imgFraqueza: types.geo, number: "006"},
  
    {nome: "Bennett", atributo:{vida: 1039, ataque: 16, defesa: 65}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://i.pinimg.com/originals/f7/81/a5/f781a564eab4968811ae573ebfe5b189.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "007"},

    {nome: "Chongyun", atributo:{vida: 921, ataque: 19, defesa: 54}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/mJrhjLAYwZoAAAAd/genshin-chongyun.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "008"},
  
    {nome: "Diluc", atributo:{vida: 1011, ataque: 26, defesa: 61}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://64.media.tumblr.com/7a9e3cb35c5775a46c5c8e9d53c05c99/536d6a03fd3680fe-7f/s540x810/10ccd42d4cd020a577e31f2afe3ac933cff194d9.gifv", imgType: types.pyro, imgFraqueza: types.hydro, number: "009"},

    {nome: "Diona", atributo:{vida: 802, ataque: 18, defesa: 50}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/L-zLf-_6vfsAAAAC/diona-genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "010"},

    {nome: "Eula", atributo:{vida: 1030, ataque: 27, defesa: 58}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://pa1.narvii.com/7930/eca58dddf21dae40b8579571c827d1c40e748d8cr1-362-350_00.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "011"},
  
    {nome: "Fischl", atributo:{vida: 770, ataque: 20, defesa: 50}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/CfDHxaTaURoAAAAC/fischl-genshin-fischl.gif", imgType: types.electro, imgFraqueza: types.geo, number: "012"},
    
    {nome: "Ganyu", atributo:{vida: 763, ataque: 26, defesa: 49}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/koLLNatRCloAAAAC/ganyu.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "013"},
  
    {nome: "Gorou", atributo:{vida: 802, ataque: 15, defesa: 54}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://64.media.tumblr.com/37ec1e46ba1bc8d1003c2275102534ce/4ef3b9d1062c5b73-88/s250x400/4edb9188eef3291647834f18e360d98a1994789e.gifv", imgType: types.geo, imgFraqueza: types.dendro, number: "014"},

    {nome: "Hutao", atributo:{vida: 1211, ataque: 8, defesa: 68}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/JwTTqT7X8UYAAAAC/hutao-hu-tao-gnehsin.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "015"},
  
    {nome: "Jean", atributo:{vida: 1144, ataque: 19, defesa: 60}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/pbCxoqyg7ucAAAAC/jean-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "016"},

    {nome: "Kazuha", atributo:{vida: 1039, ataque: 23, defesa: 63}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/jCqhCcN9bAoAAAAC/kazuha-kazuha-genshin.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "017"},
  
    {nome: "Kaeya", atributo:{vida: 976, ataque: 19, defesa: 66}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/0RC7nj1Fz_IAAAAM/kaeya-genshin.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "018"},
  
    {nome: "Ayaka", atributo:{vida: 1001, ataque: 27, defesa: 61}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/zXhf6-giP9cAAAAC/genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "019"},
    
    {nome: "Keqing",  atributo:{vida: 1020, ataque: 25, defesa: 62}, rarity:"legend" ,type: "electro", fraqueza: "geo", img:"https://c.tenor.com/O0Rd9v0NpjkAAAAC/keqing-genshin-impact.gif", imgType: types.electro, imgFraqueza: types.geo, number: "020"},
  
    {nome: "Klee",  atributo:{vida: 801, ataque: 24, defesa: 48}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/OtuxvcMD0TcAAAAC/klee-genshin-impact.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "021"},
  
    {nome: "Sara",  atributo:{vida: 802, ataque: 16, defesa: 53}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/lzrl6tp1o0wAAAAM/mihoyo-genshin.gif", imgType: types.electro, imgFraqueza: types.geo, number: "022"},  
  
    {nome: "Lisa",  atributo:{vida: 802, ataque: 19, defesa: 48}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://64.media.tumblr.com/7fb602c74d4552241d78d51f3b04f811/9c6bab7b5bf15ec5-a9/s540x810/34803733aa687a07aef9628e0a3de6b936e8a0e7.gifv", imgType: types.electro, imgFraqueza: types.geo, number: "023"},
  
    {nome: "Mona",  atributo:{vida: 810, ataque: 22, defesa: 51}, rarity:"legend" ,type: "hydro", fraqueza: "cryo",  img:"https://c.tenor.com/mg_jgng7uAgAAAAC/genshin-impact-mona.gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "024"},
  
    {nome: "Ningguang",  atributo:{vida: 821, ataque: 18, defesa: 48}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/CUxvxU7rpOsAAAAd/ningguang-genshin.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "025"},
  
    {nome: "Noelle",  atributo:{vida: 1012, ataque: 16, defesa: 67}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://64.media.tumblr.com/ce7693ee81e7f0fcb9028308607c81a0/2ece92c04e848692-99/s500x750/d03c37febd11d406928e7159a13d02453a0cb60e.gifv", imgType: types.geo, imgFraqueza: types.dendro, number: "026"},
  
    {nome: "Qiqi",  atributo:{vida: 963, ataque: 22, defesa: 72}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/4Hi7R-iQzoMAAAAC/qiqi-genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "027"},
  
    {nome: "Raiden",  atributo:{vida: 1005, ataque: 26, defesa: 61}, rarity:"legend" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/iwxQK4D4If4AAAAC/baal-raiden-shogun.gif", imgType: types.electro, imgFraqueza: types.geo, number: "028"},
  
    {nome: "Razor",  atributo:{vida: 1003, ataque: 20, defesa: 63}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/QdvGU-QjZoIAAAAd/genshin-impact-razor.gif", imgType: types.electro, imgFraqueza: types.geo, number: "029"},
  
    {nome: "Rosaria",  atributo:{vida: 1030, ataque: 20, defesa: 60}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://thumbs.gfycat.com/ShorttermHandmadeHarpseal-max-1mb.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "030"},
  
    {nome: "Kokomi",  atributo:{vida: 1049, ataque: 18, defesa: 51}, rarity:"legend" ,type: "hydro", fraqueza: "cryo",  img:"https://c.tenor.com/KZBhR6mOhsoAAAAC/kokomi-genshin-impact.gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "031"},
  
    {nome: "Sayu",  atributo:{vida: 994, ataque: 20, defesa: 62}, rarity:"default" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/uJZCDof6bhgAAAAd/mihoyo-genshin.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "032"},
  
    {nome: "Shenhe",  atributo:{vida: 1011, ataque: 24, defesa: 65}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/Yu027QgnYgAAAAAd/shenhe-genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "033"},
  
    {nome: "Sucrose",  atributo:{vida: 775, ataque: 14, defesa: 59}, rarity:"default" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/DWTzziIWlngAAAAM/sucrose-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "034"},
  
    {nome: "Tartaglia",  atributo:{vida: 1020, ataque: 23, defesa: 63}, rarity:"legend" ,type: "hydro", fraqueza: "cryo",  img:"https://upload-os-bbs.hoyolab.com/upload/2021/10/16/41103092/b04183a77d8b81b1aa0ca490c3053a01_8271985383520898396.gif?x-oss-process=image/resize,s_740/quality,q_80/auto-orient,0/interlace,1/format,gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "035"},
  
    {nome: "Thoma",  atributo:{vida: 866, ataque: 17, defesa: 63}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://64.media.tumblr.com/5416d674b6f9de7cef894a2739f1a1e0/df068176a5b97fe6-c7/s540x810/87f97ab8aac50e92e884ab01ec0113157b3edc75.gifv", imgType: types.pyro, imgFraqueza: types.hydro, number: "036"},
  
    {nome: "Venti",  atributo:{vida: 820, ataque: 20, defesa: 52}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/GtndabMSfoMAAAAC/venti-venti-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "037"},
  
    {nome: "Xiangling",  atributo:{vida: 912, ataque: 19, defesa: 56}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/XfX206AroQ4AAAAC/xiangling-genshin-impact.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "038"},
  
      {nome: "Xiao",  atributo:{vida: 991, ataque: 27, defesa: 62}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/nxccQmb_0ksAAAAd/xiao-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "039"},
  
    {nome: "Xingqiu",  atributo:{vida: 857, ataque: 17, defesa: 64}, rarity:"default" ,type: "hydro", fraqueza: "cryo",  img:"https://i.pinimg.com/originals/a6/2e/a3/a62ea327c5b27f804d60c172cdef2a4e.gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "040"},
  
    {nome: "Xinyan",  atributo:{vida: 939, ataque: 21, defesa: 67}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/uA2Okzx7OHoAAAAM/xinyan-genshin-impact.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "041"},
  
    {nome: "Yae Miko",  atributo:{vida: 807, ataque: 26, defesa: 44}, rarity:"legend" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/YCyeyOuhcysAAAAC/yae-miko-yae.gif", imgType: types.electro, imgFraqueza: types.geo, number: "042"},
  
    {nome: "Yanfei",  atributo:{vida: 784, ataque: 20, defesa: 49}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://i.imgur.com/0H7lPi2.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "043"},
  
    {nome: "Yoimiya",  atributo:{vida: 791, ataque: 25, defesa: 48}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/CyX1h3JTPbIAAAAC/yoimiya-yoimiya-genshin.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "044"},
  
    {nome: "Yunjin",  atributo:{vida: 894, ataque: 16, defesa: 62}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/xJs_NmfapkoAAAAC/genshin-impact-yunjin.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "045"},
  
    {nome: "Zhongli",  atributo:{vida: 1144, ataque: 20, defesa: 57}, rarity:"legend" ,type: "geo", fraqueza: "dendro",  img:"https://i.pinimg.com/originals/a4/b9/d8/a4b9d824090f441fb50f62e8ccacdda0.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "046"}
  
]

const deckBot = [
  
    {nome: "Albedo", atributo:{vida: 1030, ataque: 20, defesa: 68}, rarity:"legend" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/ysoUYZ6PBZIAAAAC/albedo.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "001"},
    
    {nome: "Aloy", atributo:{vida: 848, ataque: 18, defesa: 53}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://media.discordapp.net/attachments/711841818249134120/955918582611591220/aloy.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "002"},
  
    {nome: "Amber", atributo:{vida: 793, ataque: 19, defesa: 50}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/0vHyvgJbnYcAAAAd/amber-genshin.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "003"},

    {nome: "Itto", atributo:{vida: 1001, ataque: 18, defesa: 75}, rarity:"legend" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/8xsBcfU6GaYAAAAC/itto-arataki-itto.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "004"},
  
    {nome: "Barbara", atributo:{vida: 821, ataque: 13, defesa: 56}, rarity:"default" ,type: "hydro", fraqueza: "cryo",  img:"https://64.media.tumblr.com/a12a167bb0817cce56b4bab11eee7027/135abbc2bfa5dc6e-bd/s540x810/bb728751ccbac1df261077a3fd5a1e9b5032c548.gifv", imgType: types.hydro, imgFraqueza: types.cryo, number: "005"},
    
    {nome: "Beidou", atributo:{vida: 1094, ataque: 19, defesa: 54}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/6LI7tizDTsoAAAAd/beidou.gif", imgType: types.electro, imgFraqueza: types.geo, number: "006"},
  
    {nome: "Bennett", atributo:{vida: 1039, ataque: 16, defesa: 65}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://i.pinimg.com/originals/f7/81/a5/f781a564eab4968811ae573ebfe5b189.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "007"},

    {nome: "Chongyun", atributo:{vida: 921, ataque: 19, defesa: 54}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/mJrhjLAYwZoAAAAd/genshin-chongyun.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "008"},
  
    {nome: "Diluc", atributo:{vida: 1011, ataque: 26, defesa: 61}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://64.media.tumblr.com/7a9e3cb35c5775a46c5c8e9d53c05c99/536d6a03fd3680fe-7f/s540x810/10ccd42d4cd020a577e31f2afe3ac933cff194d9.gifv", imgType: types.pyro, imgFraqueza: types.hydro, number: "009"},

    {nome: "Diona", atributo:{vida: 802, ataque: 18, defesa: 50}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/L-zLf-_6vfsAAAAC/diona-genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "010"},

    {nome: "Eula", atributo:{vida: 1030, ataque: 27, defesa: 58}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://pa1.narvii.com/7930/eca58dddf21dae40b8579571c827d1c40e748d8cr1-362-350_00.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "011"},
  
    {nome: "Fischl", atributo:{vida: 770, ataque: 20, defesa: 50}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/CfDHxaTaURoAAAAC/fischl-genshin-fischl.gif", imgType: types.electro, imgFraqueza: types.geo, number: "012"},
    
    {nome: "Ganyu", atributo:{vida: 763, ataque: 26, defesa: 49}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/koLLNatRCloAAAAC/ganyu.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "013"},
  
    {nome: "Gorou", atributo:{vida: 802, ataque: 15, defesa: 54}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://64.media.tumblr.com/37ec1e46ba1bc8d1003c2275102534ce/4ef3b9d1062c5b73-88/s250x400/4edb9188eef3291647834f18e360d98a1994789e.gifv", imgType: types.geo, imgFraqueza: types.dendro, number: "014"},

    {nome: "Hutao", atributo:{vida: 1211, ataque: 8, defesa: 68}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/JwTTqT7X8UYAAAAC/hutao-hu-tao-gnehsin.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "015"},
  
    {nome: "Jean", atributo:{vida: 1144, ataque: 19, defesa: 60}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/pbCxoqyg7ucAAAAC/jean-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "016"},

    {nome: "Kazuha", atributo:{vida: 1039, ataque: 23, defesa: 63}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/jCqhCcN9bAoAAAAC/kazuha-kazuha-genshin.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "017"},
  
    {nome: "Kaeya", atributo:{vida: 976, ataque: 19, defesa: 66}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/0RC7nj1Fz_IAAAAM/kaeya-genshin.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "018"},
  
    {nome: "Ayaka", atributo:{vida: 1001, ataque: 27, defesa: 61}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/zXhf6-giP9cAAAAC/genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "019"},
    
    {nome: "Keqing",  atributo:{vida: 1020, ataque: 25, defesa: 62}, rarity:"legend" ,type: "electro", fraqueza: "geo", img:"https://c.tenor.com/O0Rd9v0NpjkAAAAC/keqing-genshin-impact.gif", imgType: types.electro, imgFraqueza: types.geo, number: "020"},
  
    {nome: "Klee",  atributo:{vida: 801, ataque: 24, defesa: 48}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/OtuxvcMD0TcAAAAC/klee-genshin-impact.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "021"},
  
    {nome: "Sara",  atributo:{vida: 802, ataque: 16, defesa: 53}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/lzrl6tp1o0wAAAAM/mihoyo-genshin.gif", imgType: types.electro, imgFraqueza: types.geo, number: "022"},  
  
    {nome: "Lisa",  atributo:{vida: 802, ataque: 19, defesa: 48}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://64.media.tumblr.com/7fb602c74d4552241d78d51f3b04f811/9c6bab7b5bf15ec5-a9/s540x810/34803733aa687a07aef9628e0a3de6b936e8a0e7.gifv", imgType: types.electro, imgFraqueza: types.geo, number: "023"},
  
    {nome: "Mona",  atributo:{vida: 810, ataque: 22, defesa: 51}, rarity:"legend" ,type: "hydro", fraqueza: "cryo",  img:"https://c.tenor.com/mg_jgng7uAgAAAAC/genshin-impact-mona.gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "024"},
  
    {nome: "Ningguang",  atributo:{vida: 821, ataque: 18, defesa: 48}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/CUxvxU7rpOsAAAAd/ningguang-genshin.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "025"},
  
    {nome: "Noelle",  atributo:{vida: 1012, ataque: 16, defesa: 67}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://64.media.tumblr.com/ce7693ee81e7f0fcb9028308607c81a0/2ece92c04e848692-99/s500x750/d03c37febd11d406928e7159a13d02453a0cb60e.gifv", imgType: types.geo, imgFraqueza: types.dendro, number: "026"},
  
    {nome: "Qiqi",  atributo:{vida: 963, ataque: 22, defesa: 72}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/4Hi7R-iQzoMAAAAC/qiqi-genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "027"},
  
    {nome: "Raiden",  atributo:{vida: 1005, ataque: 26, defesa: 61}, rarity:"legend" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/iwxQK4D4If4AAAAC/baal-raiden-shogun.gif", imgType: types.electro, imgFraqueza: types.geo, number: "028"},
  
    {nome: "Razor",  atributo:{vida: 1003, ataque: 20, defesa: 63}, rarity:"default" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/QdvGU-QjZoIAAAAd/genshin-impact-razor.gif", imgType: types.electro, imgFraqueza: types.geo, number: "029"},
  
    {nome: "Rosaria",  atributo:{vida: 1030, ataque: 20, defesa: 60}, rarity:"default" ,type: "cryo", fraqueza: "anemo",  img:"https://thumbs.gfycat.com/ShorttermHandmadeHarpseal-max-1mb.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "030"},
  
    {nome: "Kokomi",  atributo:{vida: 1049, ataque: 18, defesa: 51}, rarity:"legend" ,type: "hydro", fraqueza: "cryo",  img:"https://c.tenor.com/KZBhR6mOhsoAAAAC/kokomi-genshin-impact.gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "031"},
  
    {nome: "Sayu",  atributo:{vida: 994, ataque: 20, defesa: 62}, rarity:"default" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/uJZCDof6bhgAAAAd/mihoyo-genshin.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "032"},
  
    {nome: "Shenhe",  atributo:{vida: 1011, ataque: 24, defesa: 65}, rarity:"legend" ,type: "cryo", fraqueza: "anemo",  img:"https://c.tenor.com/Yu027QgnYgAAAAAd/shenhe-genshin-impact.gif", imgType: types.cryo, imgFraqueza: types.anemo, number: "033"},
  
    {nome: "Sucrose",  atributo:{vida: 775, ataque: 14, defesa: 59}, rarity:"default" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/DWTzziIWlngAAAAM/sucrose-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "034"},
  
    {nome: "Tartaglia",  atributo:{vida: 1020, ataque: 23, defesa: 63}, rarity:"legend" ,type: "hydro", fraqueza: "cryo",  img:"https://upload-os-bbs.hoyolab.com/upload/2021/10/16/41103092/b04183a77d8b81b1aa0ca490c3053a01_8271985383520898396.gif?x-oss-process=image/resize,s_740/quality,q_80/auto-orient,0/interlace,1/format,gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "035"},
  
    {nome: "Thoma",  atributo:{vida: 866, ataque: 17, defesa: 63}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://64.media.tumblr.com/5416d674b6f9de7cef894a2739f1a1e0/df068176a5b97fe6-c7/s540x810/87f97ab8aac50e92e884ab01ec0113157b3edc75.gifv", imgType: types.pyro, imgFraqueza: types.hydro, number: "036"},
  
    {nome: "Venti",  atributo:{vida: 820, ataque: 20, defesa: 52}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/GtndabMSfoMAAAAC/venti-venti-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "037"},
  
    {nome: "Xiangling",  atributo:{vida: 912, ataque: 19, defesa: 56}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/XfX206AroQ4AAAAC/xiangling-genshin-impact.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "038"},
  
      {nome: "Xiao",  atributo:{vida: 991, ataque: 27, defesa: 62}, rarity:"legend" ,type: "anemo", fraqueza: "electro",  img:"https://c.tenor.com/nxccQmb_0ksAAAAd/xiao-genshin-impact.gif", imgType: types.anemo, imgFraqueza: types.electro, number: "039"},
  
    {nome: "Xingqiu",  atributo:{vida: 857, ataque: 17, defesa: 64}, rarity:"default" ,type: "hydro", fraqueza: "cryo",  img:"https://i.pinimg.com/originals/a6/2e/a3/a62ea327c5b27f804d60c172cdef2a4e.gif", imgType: types.hydro, imgFraqueza: types.cryo, number: "040"},
  
    {nome: "Xinyan",  atributo:{vida: 939, ataque: 21, defesa: 67}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/uA2Okzx7OHoAAAAM/xinyan-genshin-impact.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "041"},
  
    {nome: "Yae Miko",  atributo:{vida: 807, ataque: 26, defesa: 44}, rarity:"legend" ,type: "electro", fraqueza: "geo",  img:"https://c.tenor.com/YCyeyOuhcysAAAAC/yae-miko-yae.gif", imgType: types.electro, imgFraqueza: types.geo, number: "042"},
  
    {nome: "Yanfei",  atributo:{vida: 784, ataque: 20, defesa: 49}, rarity:"default" ,type: "pyro", fraqueza: "hydro",  img:"https://i.imgur.com/0H7lPi2.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "043"},
  
    {nome: "Yoimiya",  atributo:{vida: 791, ataque: 25, defesa: 48}, rarity:"legend" ,type: "pyro", fraqueza: "hydro",  img:"https://c.tenor.com/CyX1h3JTPbIAAAAC/yoimiya-yoimiya-genshin.gif", imgType: types.pyro, imgFraqueza: types.hydro, number: "044"},
  
    {nome: "Yunjin",  atributo:{vida: 894, ataque: 16, defesa: 62}, rarity:"default" ,type: "geo", fraqueza: "dendro",  img:"https://c.tenor.com/xJs_NmfapkoAAAAC/genshin-impact-yunjin.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "045"},
  
    {nome: "Zhongli",  atributo:{vida: 1144, ataque: 20, defesa: 57}, rarity:"legend" ,type: "geo", fraqueza: "dendro",  img:"https://i.pinimg.com/originals/a4/b9/d8/a4b9d824090f441fb50f62e8ccacdda0.gif", imgType: types.geo, imgFraqueza: types.dendro, number: "046"}
  
 ]

const deckUsed = []


const enemies = ["Azhdaha","Dvalin","Signora","Childe","Andrius","Ei"]
const enemiesRandom = enemies[parseInt(Math.random()*6)]
document.getElementById("enemies").insertAdjacentHTML("afterbegin", `${enemiesRandom}`)

const board = document.getElementById("board")

var cardBot
var cardPlayer


let ptsBot = 0; let ptsPlayer = 0;
function scoreboard(){
    const scoreboardPlayer = document.getElementById("ptsPlayer")
    const scoreboardBot = document.getElementById("ptsBot")

    scoreboardBot.textContent = ptsBot
    scoreboardPlayer.textContent = ptsPlayer
} 

cardRaffle()

function cardRaffle(){
    const raffleIndexPlayer = parseInt(Math.random()*deck.length)
    let cardPlayerRaffe = deck[raffleIndexPlayer]
    cardPlayer = cardPlayerRaffe

    const raffleIndexBot = parseInt(Math.random()*deckBot.length)
    let cardBotRaffle = deckBot[raffleIndexBot]
    cardBot = cardBotRaffle
  
    deckUsed.push(cardPlayer)
    exibirCardUsed(raffleIndexPlayer, raffleIndexBot)

    exibirCardPlayer()
}

function exibirCardPlayer(){
    board.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <header class="header-card">
                <img src="${cardPlayer.imgType}" class="type">
                <h3 class="${cardPlayer.rarity}">${cardPlayer.nome}</h3>
            </header>
            <main class="main-card ${cardPlayer.type}">
                <img src="${cardPlayer.img}" class="person">
                <ul>
                    <li><input type="radio" name="action" value="vida" checked>Vida: <span>${cardPlayer.atributo.vida}</span></li>
                    <li><input type="radio" name="action" value="ataque">Ataque: <span>${cardPlayer.atributo.ataque}</span></li>
                    <li><input type="radio" name="action" value="defesa">Defesa: <span>${cardPlayer.atributo.defesa}</span></li>
                </ul>
            </main>
            <footer class="footer-card">
                <img src="${cardPlayer.imgFraqueza}" class="type" id="fraquezaPlayer">
                <legend>2x</legend>
                <span>${cardPlayer.number}</span>
            </footer>
        </div>
    `)
}

function exibirCardMaquina(){
    board.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <header class="header-card">
                <img src="${cardBot.imgType}" class="type">
                <h3 class="${cardBot.rarity}">${cardBot.nome}</h3>
            </header>
            <main class="main-card ${cardBot.type}">
                <img src="${cardBot.img}" class="person">
                <ul>
                    <li>Vida: <span>${cardBot.atributo.vida}</span></li>
                    <li>Ataque: <span>${cardBot.atributo.ataque}</span></li>
                    <li>Defesa: <span>${cardBot.atributo.defesa}</span></li>
                </ul>
            </main>
            <footer class="footer-card">
                <img src="${cardBot.imgFraqueza}" class="type" id="fraquezaBot">
                <legend>2x</legend>
                <span>${cardBot.number}</span>
            </footer>
        </div>
    `)
}

function exibirCardUsed(valueIndexPlayer, valueIndexBot){
    deck.splice(valueIndexPlayer,1)
    deckBot.splice(valueIndexBot,1)

    console.log(valueIndexBot)

    const cardUsed = document.getElementById("cardUsed")
    cardUsed.innerHTML = ""
    for(var i = 0; i<deckUsed.length; i++){
        cardUsed.insertAdjacentHTML("afterbegin", `
            <div class="card">
                <header class="header-card">
                    <img src="${deckUsed[i].imgType}" class="type">
                    <h3 class="${deckUsed[i].rarity}">${deckUsed[i].nome}</h3>
                </header>
                <main class="main-card ${deckUsed[i].type}">
                    <img src="${deckUsed[i].img}" class="person">
                    <ul>
                        <li>Ataque: <span>${deckUsed[i].atributo.vida}</span></li>
                        <li>Defesa: <span>${deckUsed[i].atributo.ataque}</span></li>
                        <li>Especial: <span>${deckUsed[i].atributo.defesa}</span></li>
                    </ul>
                </main>
                <footer class="footer-card">
                    <img src="${deckUsed[i].imgFraqueza}" class="type">
                </footer>
            </div>
        `)
    }
    document.getElementById("useTotal").textContent = `(${deckUsed.length})`
}

function play() {
    const optionPlayer = opcaoSelecionada() 

    let valueCardPlayer = cardPlayer.atributo[optionPlayer] 
    let valueCardMaquina = cardBot.atributo[optionPlayer]

    const $button = document.getElementById("btn-play")
    const msg = document.querySelector(".msg")
    const msgText = document.querySelector(".msgText")
    const msgFraqueza = document.querySelector("small")
    msgFraqueza.textContent = ""
    exibirCardMaquina(optionPlayer)

    const alertFraquezaPlayer = document.getElementById("fraquezaPlayer")
    const alertFraquezaBot = document.getElementById("fraquezaBot")
    
    if(optionPlayer == "ataque"){
        if(cardPlayer.fraqueza == cardBot.type){
            msgFraqueza.style.cssText = `
                display: block;
                color: red;
            `
            msgFraqueza.textContent = "Seu time recebeu o dobro de dano por fraqueza"
            valueCardMaquina = valueCardMaquina * 2

            alertFraquezaPlayer.style.cssText = `animation: piscar 1s linear infinite;`
            console.log("Efeito: ", valueCardMaquina)
        }
        if(cardBot.fraqueza == cardPlayer.type){
            msgFraqueza.style.cssText = `
                display: block;
                color: red;
            `

            msgFraqueza.textContent = "O boss recebeu o dobro de dano por fraqueza"
            alertFraquezaBot.style.cssText = `animation: piscar 1s linear infinite;`

            valueCardPlayer = valueCardPlayer * 2
            console.log("Efeito: ", valueCardPlayer)
        }
    }

    if(valueCardPlayer < valueCardMaquina){
        msgText.innerHTML = ""
        msgText.insertAdjacentHTML("afterbegin", `${cardPlayer.nome} perdeu <br><br> ${cardBot.nome} é o vencedor da rodada <br><br>`)
        ptsBot = ptsBot + 1
      
    }
    else if(valueCardPlayer > valueCardMaquina){
        msgText.innerHTML = ""
        msgText.insertAdjacentHTML("afterbegin", `${cardBot.nome} perdeu <br><br> ${cardPlayer.nome} é o vencedor da rodada <br><br>`)
        ptsPlayer = ptsPlayer + 1


    }else if(valueCardPlayer == valueCardMaquina){
        msgText.innerHTML = ""
        msgText.insertAdjacentHTML("afterbegin", `Houve um empate <br><br>`)
    }
    
    $button.style.display = "none"
    msg.style.display = "block"

    scoreboard()
    timer()

    setTimeout(()=>{
        msg.style.display = "none"
        $button.style.display = "block"
        board.innerHTML = ""
        if(deck[0] != undefined){
            cardRaffle()
        }
        else{
            msg.style.display = "block"
            $button.style.display = "none"
            if(ptsPlayer > ptsBot){
                msg.innerHTML = ""
                msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA! <br><br> Você venceu esse duelo`)
            }
            else if(ptsPlayer < ptsBot){
                msg.innerHTML = ""
                msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA! <br><br> ${enemiesRandom} venceu esse duelo`)
            }
            else{
                msg.innerHTML = ""
                msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA! <br><br> Não houve vencedores`)
            }
        }
    }, 7000)
    
}

function timer(){
    let time = 4
    const temporizador = setInterval(()=>{
        time --
        document.querySelector(".time").textContent = time
        if(time <= 0){
            clearInterval(temporizador)
        }
    }, 1000)   
}

function opcaoSelecionada() {
    var selecionado = document.getElementsByName("action"); 
    for (i = 0; i < selecionado.length; i++) {
      if (selecionado[i].checked) {
        return selecionado[i].value;
      }
    }
}
