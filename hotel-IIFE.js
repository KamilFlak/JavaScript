//funkcja IIFE natychmiast wykonywane wyraenie funkcji 


(function()
//utworzenie obiektu hotel oraz wyświetlenie szczegółów oferty.
//utworzenie obiektu hotel za pomocą składni literału obiektu. 
{
    var hotel = {
        name: 'Constancja',
        roomRate: 240, // wartosc wyrazona w zlotych 
        discount: 15, // rabat wyrazony w procentach 
        offerPrice: function()
        {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

// wyswietlanie nazyw hotelu ceny standardowej oraz ceny specjalnej z uwzglednionym rabatem.

var hotelName, roomRate, specialRate; // deklaracja zmiennych 

hotelBaseName = document.getElementById('hotelBaseName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelBaseName.textContent = hotel.name;
roomRate.textContent = hotel.roomRate.toFixed(2) + 'zł ';
//wyswietlanie ceny standardowej 
specialRate.textContent = hotel.offerPrice() + 'zł ';
//wyswietlanie ceny specjalnej z uwzglednionym rabatem

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

//Obliczanie i wyswietlenie szczegółów doyczących czasu trania oferty pomocyjnej
//----------------------------------------------------------------------------------------------
var expiryMsg; // komunikat wyswietlany uzytkownikowi
var today; // bieząca data
var elEnds; // Element wyświetlający komunikat o dacie wygaśnięcia ofert promocyjnej. 

function offerExpires(today){
    //zadeklatowanie zmiennych w funkcji, a więc mają zakres lokalny.
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    //dodanie siedmiu dni(wyrazonych w miliskenudach)
    weekFromToday= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // utworzenie tablic przechowujacych nazwy dni tygodnia i miesiecy 
    dayNames = ['niedzielę','poniedizalek','wtorek','środę','czwartek','piątek','sobotę'];
    monthNames = ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','pazdziernika','listopada','grudnia']
    //wybor komponentow daty wyswietlanej na stronie

    day=dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // przygotowanie komunikatu.
    expiryMsg = ' Oferta wygasa w: ';
    expiryMsg += day + ' <br/>(' + date + ' '+ month + ' '+ year + ')';
    return expiryMsg;
}
today = new Date();
// uimeszczenie dzisiejszej daty w zmiennej.
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);
//wyswietlenie przygotowanego komunikatu 
// koniec natychmiast wywolanego wyrazenie funkcji.




}());