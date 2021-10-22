function search () {
  if (document.getElementById('poisk').value !== ""){
  window.location.href = 'https://yandex.ru/'+document.getElementById('poisk').value}
  else {
    alert('Введен пустой запрос');
  }
  }