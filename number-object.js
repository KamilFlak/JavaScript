var originalNumber = 10.23456;

var msg ='<h2>liczba początkowa</h2><p>' + originalNumber + '</p>';
 msg +='<h2>trzy miejsca po przecinku</h2><p>' + originalNumber.toFixed(3) + '</p>';
 msg +='<h2>trzy cyfry łącznie</h2><p>' + originalNumber.toPrecision(3) + '</p>';

 var el = document.getElementById('info-number');
 el.innerHTML =msg;