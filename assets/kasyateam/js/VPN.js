ymaps.ready(init);
	function init() {
                var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
                var rkn = '<meta name="viewport" content="initial-scale=1, minimum-scale=0"><div style="width:70%; margin: 0 auto; margin-top:5%;"><center><a href="https://rkn.gov.ru"><img style="width:80%; margin: 0 auto;" src="./assets/images/8d3ece60192127ef1963869976b86c9f-scaled-1.jpg"></img></a></center><br/><h5 style="text-align: center">ФЕДЕРАЛЬНАЯ СЛУЖБА ПО НАДЗОРУ В СФЕРЕ СВЯЗИ, ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ И МАССОВЫХ КОММУНИКАЦИЙ</h5></div><div style="width:90%; margin: 0 auto; margin-top:5%;"><h2 style="text-align: center">Искомый домен внесен в РЕЕСТР доменных имен, указателей страниц сайтов в сети «Интернет» и сетевых адресов, позволяющих идентифицировать сайты в сети «Интернет», содержащие информацию, распространение которой в Российской Федерации запрещено<br/><br/>Либо искомый домен заблокирован по решению суда</h2></div>';
           	if (country == "undefined") {
                window.location.href = "/error";
                } else if (country == "Россия") { 
                //eval(document.write(rkn));	 
                } else if (country == "Польша") {   			
                } else if (country == "Беларусь") {			
                } else if (country == "Украина") {			 
                } else if (country == "Казахстан") {			  
                } else if (country == "Латвия") {
                } else if (country == "Швейцария") {			
                } else if (country == "США") {						
                } else if (country == "Германия") {
                } else if (window.location.pathname == '/block'){
                }else if (window.location.pathname == '/unblock'){
                }else {
                window.location.href = "/block"; 
                }
var el = document.getElementById('country');	
if (typeof el.innerText !== 'undefined') {
   el.innerText = country;
  } else {
   el.textContent = country;
  }
}
