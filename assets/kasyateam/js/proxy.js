function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

var url = document.getElementById('url');
var urlopen = document.getElementById('urlopen');
var a = 'https://z5h64q92x9.net/proxy_u/ru-ru.ru.57ee7853-60d1ca24-a07f07c1-74722d776562/https/';
var b = 'yandex.ru/search/';

var varn = 0

function proxy() {
 b = url.value
 urlopen.src = a+b;
}

function kasyanadzor(){
  if (url.value == 'vk.com'){
  url.value = ''
  varn = varn+1
  }else if (url.value == 'ok.ru'){
  url.value = ''
  varn = varn+1
  }else{
  document.getElementById('varn').innerHTML = varn+'/5';
  if (varn>=5){
  var date = new Date(new Date().getTime() + 5 * 1000);
  document.cookie = "ban=true; path=/; expires=" + date.toUTCString();
  }
  if (getCookie('ban') ==='true') {
  document.getElementById('ban').innerHTML = '<input class="m-btn-theme" type="button" value="Выход" onclick="window.close()"/>';
  document.getElementById('varn').innerHTML = '5/5.Вы будете разблокированы через 1 час.';
  } else {}
}}


setInterval(kasyanadzor, 100)

document.write('<button style="position: fixed; left: 50px; top: 500px;" onclick="alert(document.cookie)">click</button>')
 