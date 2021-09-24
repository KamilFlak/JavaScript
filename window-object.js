var greeting = ' Miłego dnia. Kamil. Pozdrawiam.'
var msg ='<h2> okno przegladarki</h2><p>szerokość: ' + window.innerWidth + '</p>';
msg += '<p>wysokość: ' + window.innerHeight + '</p>';
msg += '<h2>historia</h2><p>elementy: ' + window.history.lenght + '</p>';
msg += '<h2>erkan</h2><p>szerokosc: ' + window.screen.width + '</p>';
msg += '<p>wysokość: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
alert('bieąca strona: ' + window.location +  greeting);