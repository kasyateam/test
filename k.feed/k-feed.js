//Та самая панель переключения

var on = 1 //Включение уведомлений


//Тестовое окно
var title = ''
var post_info = ''
var head = ''
var u_title = 'Обновление'
var text_info = 'Создание динамического контента и обновление Kasya UI'
var head = ''

//Элементы
var uved = '<div id="info-all" class="info"><h3 id="info-1">'+u_title+'</h3><p id="info-2">'+text_info+'</p></div>'
var post = ' <div id="post" class="post"><div id="post-avtor" class="post-avtor">'+title+'</div><div id="post-info" class="post-info">'+post_info+'</div><div class="post-time">kasyateam</div></div>'
var head = '<div id="header"class="header"><p id="header-text" class="header-text">'+head+'</p></div>'
var del = '<hr><div class="end">Больше ничего нет :(</div>'


//автопостройка шапки
document.head.innerHTML = '<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title></title><link rel="stylesheet" href="style.css">'




//автопостройка страницы
document.body.innerHTML = '<main>'+head+post+del+uved+'</main>'




// Уведомления
if (on == 1){
    document.getElementById('info-1').innerHTML = 'Обновление';
    document.getElementById('info-2').innerHTML = 'Создание динамического контента и обновление Kasya UI';    
}else{
    document.getElementById('info-1').remove()
}



//K.Feed m



//Для K.Feed m
if (window.location.pathname == '/m/index'){

    document.title = 'K.Feed | Главная';
    document.getElementById('index-date').innerHTML = 'Добро пожаловать';
    document.getElementById('index-razdel').innerHTML = 'Выберите раздел :)';



}else if(window.location.pathname == '/m/feed'){

    document.title = 'K.Feed | Новости';




}else if(window.location.pathname == '/m/k-feed'){

    var post_info = '<center><img style="width: 40%" src="https://kasyateam.github.io/assets/img/kasya_stick.png" alt="K.Feed"><img style="width: 60%; border-radius: 20px;" src="https://kasyateam.github.io/assets/img/QR-download.png" alt="K.Feed"></center>'
    document.title = 'K.Feed';
    document.getElementById('info-1').innerHTML = 'Это важно';
    document.getElementById('info-2').innerHTML = 'Данный раздел доступен только в мобильной версии<br/> Наведите камеру на QR код и скачайте K.Feed!';
    document.body.innerHTML = '<main>'+head+post+del+uved+'</main>'



}else if(window.location.pathname == '/m/kasya-id'){

    document.title = 'K.Feed | Kasya ID';
    document.body.innerHTML = '<main>'+head+post+del+uved+'</main>'    


    document.getElementById('reg').onclick = function(){
        document.getElementById('kasyaid').innerHTML = 'Для создания ключа, используется электронная почта и пароль. <br><br> Учтите, что мы можем удалить ваш аккаунт, если он выглядит подозрительно. Но перед этим, он будет заморожен. Если вы заметили, что ваш аккаунт не совершает вход и нарушена работа сервиса при совершенном входе, то сообщите в поддержку. <br/><br/>Обратите внимание, что для подтверждения пользователя, перед процессом восстановления, мы сбросим пароль, отправив на электронную почту сброс-ссылку.'  
    }

    document.getElementById('res').onclick = function(){
        document.getElementById('kasyaid').innerHTML = 'Что делать, если вы забыли пароль? <br/><br/>При такой ситуации, так же обратитесь в поддержку, если вход не совершен. <br/><br/>Если у вас совершен вход, но чувствуете, что забыли пароль, то перейдите в раздел "Kasya ID", где можете запросить сброс-ссылку.'
    }

}else if(window.location.pathname == '/m/kmp'){

    var head = 'Курсы программирования'
    document.title = 'K.Feed | Курсы';
    document.body.innerHTML = '<main><div class="post"><div class="post-avtor">HTML</div><div class="post-info">HTML курс <br/><a href="https://kasyateam.github.io/m/html/start.html">Перейти</a></div><div class="post-time"></div></div><div class="post"><div class="post-avtor">CSS</div><div class="post-info">CSS курс <br/><a href="https://kasyateam.github.io/m/css/start.html">Перейти</a></div><div class="post-time"></div></div><div class="post"><div class="post-avtor">JavaScript</div><div class="post-info">JavaScript курс <br/><a href="https://kasyateam.github.io/m/js/start.html">Перейти</a></div><div class="post-time"></div></div></main>'
}else{

}


//Исключение откл элементов:

/*Заголовок
if(document.getElementById('header-text').innerHTML ==''){
    document.getElementById('header').remove();
}

//Постинг
if(document.getElementById('post-info').innerHTML ==''){
    document.getElementById('post').remove();
}
//Уведомление
if(document.getElementById('text_info').innerHTML =='' && document.getElementById('').innerHTML =='var u_title' == ''){
    document.getElementById('post').remove();
}*/
