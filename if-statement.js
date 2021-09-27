var score = 75;
var msg;

if (score>50)
{
    msg = 'gratulacje ';
    msg+= ' przechodzisz do kolejnej rundy';

    var el = document.getElementById('answer-if')
    el.textContent = msg;
}