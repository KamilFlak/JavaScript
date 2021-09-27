// var el2 = document.getElementById('resultSwitch');
// var msg2 = el.textContent;

// function checkSwitch(){
//     var level = parseInt(document.getElementById("textboxSwitch").value);

//     console.log('checkSwitch started');

//     switch (level) {
//         case 1:
//             msg2 = 'pierwszy z czterech';
//             console.log('opcja 1');
//             break;
//         case 2:
//             msg2 = 'Drugi z czterech';
//             console.log('opcja 2');
//             break;
//         case 3:
//             msg2 = 'trzeci z czterech';
//             console.log('opcja 3');
//             break;
//         case 4:
//             msg2 = 'ostatnia runda';
//             console.log('opcja 4');
//             break;
//         default:
//             console.log('Przeszedlem przez switcha ale nic nie pasowalo.');
//             break;
//     }

//     console.log('msg:', msg, el);
//     el2.textContent = msg2;
// }
//---------------------________------__-----________--___--_-_-_--_-___----_____---____--_-__-_---_-_-__-_-__-_-_------_______--------
// function a(test) {
//     let temp = 0;

//     if (test > 5) {
//         temp = 1;
//     } else {
//         temp = 0;
//     }

//     return temp;
// }

// const b = test => test > 5 ? 0 : 1;

// const c = test => {
//     let temp = 0;

//     if (test > 5) {
//         temp = 1;
//     } else {
//         temp = 0;
//     }

//     return temp;
// };

// alert(a(5));
// alert(b(5));
// alert(c(5));


// alert(a(50));
// alert(b(50));
// alert(c(50));

(() => {
    const   buttonElement = document.getElementById('resultSwitchButton'),
            textElement = document.getElementById('resultSwitch'),
            inputElement = document.getElementById('textboxSwitch'),
            resolverSwitch = value => ['pierwszy z czterech', 'Drugi z czterech', 
            'trzeci z czterech', 'ostatnia runda'][value - 1] ?? 'brak sorra',
            onClick = () => textElement.textContent = resolverSwitch(parseInt(inputElement.value));
    
    buttonElement.addEventListener('click', onClick, false);
})();


//var msg;
//var level = 2;

//switch (level)
//{
//    case 1:
//        msg = 'Powodzenia na pierwszym tescie!';
//        break;
//        case 2:
//        msg = 'Drugi z czterech';
//        break;
//        case 3:
//        msg = 'trzeci z czterech';
 //       break;
 //       case 4:
 //       msg = 'ostatnia runda';
 //       break;
//}

//var el = document.getElementById('answer_switch');
//el.textContent = msg;





//function sprawdz() {
//    var liczba = document.getElementById("pole").value;

///    if (liczba > 0) document.getElementById("switch_result").innerHTML = "liczba którą wprowadziłeś jest dodatania";

//    else if 

//    (liczba < 0) document.getElementById("switch_result").innerHTML = "liczba którą wprowadziłeś jest ujemna";

//    else if 

//    (liczba == 0) document.getElementById("switch_result").innerHTML = "liczba którą wprowadziłeś to zero";

//else document.getElementById("switch_result").innerHTML = "bebok";
//}
