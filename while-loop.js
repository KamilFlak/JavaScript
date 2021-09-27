var i = 1;
var msgWhile = '';

while (i<10)
{
    msgWhile += i +" x5 =" + (i*5) + '<br/>';
    i++; 
}



document.getElementById('loopWhile').innerHTML=msgWhile;