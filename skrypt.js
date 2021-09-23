let number = Math.floor(Math.random() *11);
function Play()
{
    let userNumber = document.getElementById("userNumber").value;
    let message;
    if (userNumber>number)
    {
        message = "Twoj numer jest za duzy";
    }
    else if (userNumber<number)
    {
        message = "Twoj numer jest za maly";
    }
    else
    {
        message="gratulacje to wlasciwa liczba";
    }
    document.getElementById("message").innerHTML = message;
}
