var score = 75;
var msg = '';

function congratulate()
{
    msg += 'Gratulacje! ';
}

if (score>=50)
{
    congratulate();
    msg+= ' przechodzisz do kolejnej rundy TU ZOSTAŁA ZAIMPLEMENTOWANA FUNKCJA';
}
    var el = document.getElementById('answer-if-function')
    el.textContent = msg;
