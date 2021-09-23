var msg = 'Zapisz się do naszego newslettera, a otrzymasz 10% rabatu!'
function updateMessage()
{
    var el = document.getElementById('message_function');
    el.textContent=msg;
}
updateMessage()