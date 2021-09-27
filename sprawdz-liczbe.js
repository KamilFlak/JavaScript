
function check_compare() {
    var number = document.getElementById("textbox1").value;
    var number2 = document.getElementById("textbox2").value;
    
    
    if (number > number2)
    
    
    document.getElementById("resultComp").innerHTML = "Lewa liczba jest większa od prawej";
    
    
    else if 
    (number < number2) 
    document.getElementById("resultComp").innerHTML = "Prawa liczba jest większa od lewej";
    
    else if 
    
    (number == 0) document.getElementById("resultComp").innerHTML = "liczba którą wprowadziłeś to zero";
    
    else document.getElementById("resultComp").innerHTML = "bebok";
}

var el = document.getElementById('resultComp');
el.textContent = msg;
