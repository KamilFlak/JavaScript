var saying = 'Home sweet home';
var msg = '<h2>liczba znakow</h2><p>' + saying.length+'</p>';
msg += '<h2>duze litery</h2><p>' + saying.toUpperCase()+'</p>';
msg += '<h2>male litery</h2><p>' + saying.toLowerCase()+'</p>';
msg += '<h2>znak nr 12</h2><p>' + saying.charAt(12)+'</p>';
msg += '<h2>pierwsze wystapienie ee</h2><p>' + saying.indexOf('ee')+'</p>';
msg += '<h2>ostatnie wystapienie e</h2><p>' + saying.lastIndexOf('e')+'</p>';
msg += '<h2>znaki nr 8-14</h2><p>' + saying.substring(9,14)+'</p>';
msg += '<h2>funkcja zastapienia</h2><p>' + saying.replace('me','w')+'</p>';

var el = document.getElementById('info-string');
el.innerHTML = msg;




