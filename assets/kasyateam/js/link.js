var link = window.location.protocol+'//'+window.location.host+window.location.pathname
var full = window.location
var w = {}
w.q = '?vk'
w.w = '?patreon'
w.e = '?twitter' 
w.r = '?vkteam'
w.t = '?search'
var site = {}
site.vk = 'https://vk.com/patreon.russia'
site.patreon = 'https://www.patreon.com/user?u=37720759'
site.twitter = 'https://twitter.com/alex_kaurcev'
site.vkteam = 'https://vk.com/kasyateam'
site.search = 'https://search.kasyateam.ga'

document.getElementById('lonk').href = document.getElementById('link').innerHTML
var clock = setInterval(time, 1000)
var tik = 10

if (link + w.q == full) {
  document.getElementById('link').innerHTML = site.vk
} else if (link + w.w == full) {
  document.getElementById('link').innerHTML = site.patreon
} else if (link + w.e == full) {
  document.getElementById('link').innerHTML = site.twitter
} else if (link + w.r == full) {
  document.getElementById('link').innerHTML = site.vkteam
} else if (link + w.t == full) {
  document.getElementById('link').innerHTML = site.search
} else {
  clearInterval(clock)
  document.getElementById('info').innerHTML = 'не может быть осуществлен. Возможно, ссылка битая или больше не действительна. <p><a href="/main.html" class="m-btn-theme" style="margin-top: 50px;">На главную</a></p></div>'
  document.getElementById('link').innerHTML = 'битая'
  document.getElementById('lonk').href = '#'
}

function load () {
  window.location.href = document.getElementById('link').innerText
}

function time () {
  if (tik>0) {
   tik = (tik - 1)
   document.getElementById('time').innerHTML = tik 
  } else {
   load()
   document.getElementById('info').innerHTML = 'Переходим :)'
   clearInterval(clock)
  }
}