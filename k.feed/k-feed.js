window.location.hash


//Уведомления
var info_h = 'Обновление K.Feed'
var info_t = 'Демонстрация Kasya UI третьего поколения<br>Вам скоро будет необхожимо обновить приложение'

var loading = '<div id="load"><div id="load_1"><img id="load_2" src="load.gif"></div>'



if (window.location.hash = '#1'){
    var post = '<div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс HTML</p></div><a id="button" href="https://kasyateam.github.io/m/html/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс CSS</p></div><a id="button" href="https://kasyateam.github.io/m/css/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс JavaScript</p></div><a id="button" href="https://kasyateam.github.io/m/js/start.html">Перейти</a></div>'
    var news = '<div id="info"><h3 id="info_1">'+info_h+'</h3><p id="info_2">'+info_t+'</p></div>'
}else if (window.location.hash = '#2'){
    var post = '<div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс HTML</p></div><a id="button" href="https://kasyateam.github.io/m/html/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс CSS</p></div><a id="button" href="https://kasyateam.github.io/m/css/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс JavaScript</p></div><a id="button" href="https://kasyateam.github.io/m/js/start.html">Перейти</a></div>'
    var news = '<div id="info"><h3 id="info_1">'+info_h+'</h3><p id="info_2">'+info_t+'</p></div>'
}else if (window.location.hash = '#3'){
    var post = '<div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс HTML</p></div><a id="button" href="https://kasyateam.github.io/m/html/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс CSS</p></div><a id="button" href="https://kasyateam.github.io/m/css/start.html">Перейти</a></div><div id="post"><div id="post_head"><img src="kasya.ico" id="ava"><span id="post_avtor">Kasya Team</span></div><div id="post_text"><p>Курс JavaScript</p></div><a id="button" href="https://kasyateam.github.io/m/js/start.html">Перейти</a></div>'
    var news = '<div id="info"><h3 id="info_1">'+info_h+'</h3><p id="info_2">'+info_t+'</p></div>'
}else{
    window.location.href = '/index'
}







//Формирование главного меню
document.head.innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="https://kasyateam.github.io/favicon.ico" type="image/x-icon"><link rel="stylesheet" href="kasya_UI.css"></link>'
document.body.innerHTML = '<main id="main" onload="ok()"><div id="load"><div id="load_1"><img id="load_2" src="load.gif"></div></div><div id="head"></div>'+post+'<hr id="hr">'+news+'</main>'



//Формирование раздела
document.getElementById('head').innerHTML = 'Курсы по программированию'


//автофункция OFF
if (info_t == ''){
    document.getElementById('info').remove()
    document.getElementById('hr').remove()
}

function ok() {
    setTimeout(document.getElementById('load').remove(), 5000)
}





