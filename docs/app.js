//TODO: add confetti from https://css-tricks.com/fading-in-a-page-on-load-with-css-javascript/


function clearScreen() {
    document.getElementById("result").innerHTML = "";

}
function ac() {
    document.getElementById("result").innerHTML = "0";
}

function display(value) {
    var p = document.getElementById("result").innerHTML;
    if (p == 0) {
        clearScreen();
    }
    document.getElementById("result").innerHTML += value;
}

function calculate() {
    var p = document.getElementById("result").innerHTML;
    var q = eval(p);
    clearScreen();
    display(q);
    
    //document.getElementById("result").innerHTML = q;
}

function changeSign() {
    var p = document.getElementById("result").innerHTML;
    if (p[0] != "-") {
        p = "-" + p;
    }
    else {
        p = p.substring(1);
    }
    clearScreen();
    display(p);
}

function percent() {
    var p = document.getElementById("result").innerHTML;
    var q = Number(p);
    q /= 100;
    clearScreen();
    display(q);
}


//TODO:old comments below

// const display = document.getElementById("result");

// display.innerHTML = "it worked";



// const btn = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");

// btn1.onclick = function(){
//     alert("hello");
// }

// btn2.onclick = function(){
//     alert("hello2");
// }



// x = x + 1
//x += 1