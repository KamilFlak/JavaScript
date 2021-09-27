var table = 3;
var operator = 'additionNO';
var i = 1;
var msgExample = ' ';

if (operator === 'addition') {
    while (i < 11) {
        msgExample += i + ' + ' + table + ' = ' + (i + table) + '<br/>';
        i++;
    }
}
else {
    while (i < 11) {
        msgExample += i + ' x ' + table + ' = ' + (i * table) + '<br/>';
        i++;
    }

}

var elExample = document.getElementById('blackboard');
elExample.innerHTML = msgExample;

