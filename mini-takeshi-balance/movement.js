document.addEventListener('DOMContentLoaded', () => {
    // for(var i = 0; i < 10; i++) {
    //     var div = document.getElementById(i);
    //     // console.log(i);
    //     setTimeout(change, 3);
    // }

    var i = 1;
    setInterval(function change() {
        if (i == 10){
            alert("you win");
            return;
        }
        var div = document.getElementById(i);
       
        // console.log(i);
        // setTimeout(change, 3);
        div.style.backgroundColor = "white";
        document.getElementById(i-1).style.backgroundColor = "blue";
        i = i + 1;
        console.log(i);
        
}, 1000);

// function change(i) {
//         if (i == 10)break;
//         var div = document.getElementById(i+=1);
//         // console.log(i);
//         // setTimeout(change, 3);
//         div.style.color = "black";
//         console.log(i);
        
// }




});