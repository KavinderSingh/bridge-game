document.addEventListener('DOMContentLoaded', () => {


//     var i = 1;
//     setInterval(function change() {
//         if (i == 10){
//             alert("you win");
//             return;
//         }
//         var div = document.getElementById(i);
       
//         // console.log(i);
//         // setTimeout(change, 3);
//         div.style.backgroundColor = "white";
//         document.getElementById(i-1).style.backgroundColor = "blue";
//         i = i + 1;
//         console.log(i);
        
// }, 1000);


// let player = document.getElementById(5);
// player.style.backgroundColor = "white";

var i = -1;
var div = document.getElementById(i);
div.style.backgroundColor = "white";


function movt(event) {
    event.preventDefault();
    if(event.keyCode === 38) {
        i = i + 1;
        var div = document.getElementById(i);

        if (i == 10) {
            div.style.backgroundColor = "white";
            document.getElementById(i-1).style.backgroundColor = "blue";
            alert('you win');
            return;
        }

        if (i > 10) {
            i = 10;
        }

        if (div != null) {
            console.log(div);
            div.style.backgroundColor = "white";
            document.getElementById(i-1).style.backgroundColor = "blue";
        }        
        

       
    }
    else if (event.keyCode === 40) {

        i = i - 1;
        var div = document.getElementById(i);
        
        if (i < -1) {
            i = -1;
        }
        
        if (div != null) {
            console.log(div);
            div.style.backgroundColor = "white";
            document.getElementById(i+1).style.backgroundColor = "blue";
        }  

       
    }
    
}

document.addEventListener('keyup', movt);






});