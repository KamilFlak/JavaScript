
function sprawdz() {
    var liczba = document.getElementById("pole").value;
    if (liczba > 0) document.getElementById("wynik").innerHTML = "liczba którą wprowadziłeś jest dodatania";
    else if 
    (liczba < 0) document.getElementById("wynik").innerHTML = "liczba którą wprowadziłeś jest ujemna";
    else if 
    (liczba == 0) document.getElementById("wynik").innerHTML = "liczba którą wprowadziłeś to zero";
    else document.getElementById("wynik").innerHTML = "bebok";
}
