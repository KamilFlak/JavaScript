var scores =[24, 32, 17];
var arraLength = scores.length;
var roundNumber = 0;

var msgLoop = '';
var i;

for(i=0; i < arraLength; i++)
{
    roundNumber = ( i+1);


msgLoop +='Runda '+ roundNumber + ': ';
msgLoop += scores[i] + '<br/>';
}

document.getElementById('loopFor').innerHTML=msgLoop;