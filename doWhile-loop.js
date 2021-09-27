var counter = 1;
var msgDoWhile = '';

do 
{
    msgDoWhile += counter +" x5 =" + (i*5) + '<br/>';
    counter++; 
    console.log('wchodze do petli');

}
while (counter<5);
    console.log('wchodze do petli');


document.getElementById('loopDoWhile').innerHTML=msgDoWhile;