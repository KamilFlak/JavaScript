var pass = 50;
var score = 75;

function congrats()
{
    msg = ' gratulacje z funkcja';
}

if (score>pass)
{
    congrats();
}
else 
{
    msg = 'przegrałes';
}
var el = document.getElementById('answer-if-else');
el.textContent = msg;