var a = ''; //чтобы в консоли не было ошибки, что значение а не присвоено, если условие не выполнится.
navigator.userAgent.search();
console.log(navigator.userAgent);//выводим имя браузера и ищем то, что может указывать на IE
if (navigator.userAgent.search(/.NET4/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) 
{ a = 'Internet Explorer' };// если мы находим в строке признаки IE то значение а даем название IE
if (a == 'Internet Explorer') {
    alert('недопустимый браузер')
    document.execCommand("Stop")//останавливает загрузку после вызова скрипта, поэтому этот скрипт лежит вверху body
}
