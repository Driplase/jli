/// from /t/i/script.js
// variables
var spas = document.getElementById("ctj");
var bodies = document.getElementById("bodi");
var spasstyl = spas.style;
var wtSzW = window.innerWidth;
var wtSzH = window.innerHeight;
var wMcX = 0;
var wMcY = 0;
var sEposX = 0;
var sEposY = 0;
var spassaizX = spas.getBoundingClientRect().width;
var spassaizY = spas.getBoundingClientRect().height;
var curXpos = 0; var curYpos = 0;
var iX = 0; var iY = 0; var iXm = 0; var iYm = 0;

// cursor move tracking
window.addEventListener("load", function () {

    window.onmousemove = function (event) {
        curXpos = event.clientX;
        curYpos = event.clientY;
    };
});

// do ctjm()
setInterval(ctjm, 5);

/// tic tac toe
// variables
const t0 = document.getElementById("t0");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");
const t6 = document.getElementById("t6");
const t7 = document.getElementById("t7");
const t8 = document.getElementById("t8");
const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const r = document.getElementById("r");
var cx = document.getElementById("cx");

var b = "         ";
var s = "x";
var mo = 0;
var p = true;

// the ctjm()
function ctjm() {
    // get window size
    wtSzW = window.innerWidth;
    wtSzH = window.innerHeight;
    spassaizX = spas.getBoundingClientRect().width;
    spassaizY = spas.getBoundingClientRect().height;
    wMcX = curXpos - ( wtSzW / 2 );
    wMcY = curYpos - ( wtSzH / 2 );
    sEposX = wMcX / 25;
    sEposY = wMcY / 25;
    iXm = sEposX - (spassaizX / 2);
    iYm = sEposY - (spassaizY / 2);
    iX -= (iX - iXm) / 16;
    iY -= (iY - iYm) / 16;
    // move the thing
    spasstyl.transform = "translate(" + iX + "px, " + iY + "px)";
}

// variables from /t/keydown/
// i dont know about this box
const box = document.getElementById("bx");
// box style
var bsty = box.style;
// box x; box y; rotate
var bx = 0; var by = 0; var br = 0;
// this is not from keydown page but box variables
var bs = 1;

// function d from /t/keydown/
function d() {
    // keyboard = navigator.keyboard;
    bx -= bx / 50;
    by -= by / 50;
    br -= br / 50;
    bs = (bs - 1) * 0.994 + 1; //-= (bs - 1) / 50;
    bsty.transform = "translate(" + bx + "px, " + by + "px)";
    bsty.rotate = br + "deg";
    bsty.scale = bs;
    // btx.textContent = bt;
}

setInterval(d, 5);

// sfx
var s1 = new Audio("/f/assets/audio/sfx/1.wav");
var s2 = new Audio("/f/assets/audio/sfx/2.wav");

// button events
/* yikes, the long code. i dont like it */
t0.addEventListener("click", function () {
    if (b.slice(0, 1) === " " && p === true) {
        b = `${s}${b.slice(1, 9)}`;
        bx -= 15; by -= 15;
        cs()
    } else {
        by -= 10;
        br += 5;
        inv();
    }
});
t1.addEventListener("click", function () {
    if (b.slice(1, 2) === " " && p === true) {
        b = `${b.slice(0, 1)}${s}${b.slice(2, 9)}`;
        by -= 15;
        cs()
    } else {
        by -= 10;
        inv();
    }
});
t2.addEventListener("click", function () {
    if (b.slice(2, 3) === " " && p === true) {
        b = `${b.slice(0, 2)}${s}${b.slice(3, 9)}`;
        bx += 15; by -= 15;
        cs()
    } else {
        by -= 10;
        br -= 5;
        inv();
    }
});
t3.addEventListener("click", function () {
    if (b.slice(3, 4) === " " && p === true) {
        b = `${b.slice(0, 3)}${s}${b.slice(4, 9)}`;
        bx -= 15;
        cs()
    } else {
        bx -= 10;
        inv();
    }
});
// center ripple ready
var $g = $('table.ttt, tr, td, input');// div#bx, 
var x = 0; var y = 0;
var dropRadius = 150;
var strength = 0.3;
$(document).ready(function() {
    $g.ripples({
    resolution: 256,
    dropRadius: 60,
    perturbance: 0.2,
    interactive: false
    });
    t4.addEventListener("click", function () {
        if (b.slice(4, 5) === " " && p === true) {
            b = `${b.slice(0, 4)}${s}${b.slice(5, 9)}`;
            cs()
        } else {
            inv();
        }

            // $g = $('div.mpct');
            x = curXpos;
            y = curYpos;
            dropRadius = 50;
            strength = 3;
            bs += 0.04;

            $g.ripples('drop', x, y, dropRadius, strength);
    });
}); 
t5.addEventListener("click", function () {
    if (b.slice(5, 6) === " " && p === true) {
        b = `${b.slice(0, 5)}${s}${b.slice(6, 9)}`;
        bx += 15;
        cs()
    } else {
        bx += 10;
        inv();
    }
});
t6.addEventListener("click", function () {
    if (b.slice(6, 7) === " " && p === true) {
        b = `${b.slice(0, 6)}${s}${b.slice(7, 9)}`;
        bx -= 15; by += 15;
        cs()
    } else {
        by += 10;
        br -= 5;
        inv();
    }
});
t7.addEventListener("click", function () {
    if (b.slice(7, 8) === " " && p === true) {
        b = `${b.slice(0, 7)}${s}${b.slice(8, 9)}`;
        by += 15;
        cs()
    } else {
        by += 10;
        inv();
    }
});
t8.addEventListener("click", function () {
    if (b.slice(8, 9) === " " && p === true) {
        bx += 15; by += 15;
        b = `${b.slice(0, 8)}${s}`;
        cs()
    } else {
        by += 10;
        br += 5;
        inv();
    }
});
cx.addEventListener("click", function () {
    if (cx.value === "The O is first dude") {
        s = "o";
        cx.style.display = "none";
    } else if (cx.value === "Restart") {
        t();
    }
});

// if the placing position is invalid
function inv() {
    if (p === true) {
        document.getElementById("msg").textContent = "Invalid position.";
        mo = 1;
        s1.cloneNode(true).play();
    } else {
        s2.cloneNode(true).play();
    }
}

// change s
function cs() {
    cx.style.display = "none";
    ch()
    if (s === "o") {
        s = "x";
    } else if (s === "x") {
        s = "o";
    }
}

// do t3j()
setInterval(t3j, 5);

// the t3j()
function t3j() {
    b0.value = b.slice(0, 1);
    b1.value = b.slice(1, 2);
    b2.value = b.slice(2, 3);
    b3.value = b.slice(3, 4);
    b4.value = b.slice(4, 5);
    b5.value = b.slice(5, 6);
    b6.value = b.slice(6, 7);
    b7.value = b.slice(7, 8);
    b8.value = b.slice(8, 9);
    document.getElementById("msg").style.opacity = mo;
    document.getElementById("tr").textContent = `${s.toUpperCase()}'s Turn`;
    if (p === true) {
        mo -= mo / 200;
    }
    if (mo < 0.05) {
        document.getElementById("msg").textContent = null;
    }
    /* if (b.indexOf(" ") === -1) {
        p = false;
    } */
}

// Does some guy got win?
function ch() {
    if (
            `${b.slice(0, 1)}${b.slice(1, 2)}${b.slice(2, 3)}` === `${s}${s}${s}` || 
            `${b.slice(3, 4)}${b.slice(4, 5)}${b.slice(5, 6)}` === `${s}${s}${s}` || 
            `${b.slice(6, 7)}${b.slice(7, 8)}${b.slice(8, 9)}` === `${s}${s}${s}` || 
            `${b.slice(0, 1)}${b.slice(3, 4)}${b.slice(6, 7)}` === `${s}${s}${s}` || 
            `${b.slice(1, 2)}${b.slice(4, 5)}${b.slice(7, 8)}` === `${s}${s}${s}` || 
            `${b.slice(2, 3)}${b.slice(5, 6)}${b.slice(8, 9)}` === `${s}${s}${s}` || 
            `${b.slice(0, 1)}${b.slice(4, 5)}${b.slice(8, 9)}` === `${s}${s}${s}` || 
            `${b.slice(2, 3)}${b.slice(4, 5)}${b.slice(6, 7)}` === `${s}${s}${s}`
        ) {
        p = false;
        document.getElementById("msg").textContent = `${s.toUpperCase()} wins!`
        mo = 1;
        e();
    } else if (b.indexOf(" ") === -1) {
        p = false;
        document.getElementById("msg").textContent = "Draw";
        mo = 1;
        e();
    }
}

/* Win patterns

012
345
678

012, 345, 678, 036, 147, 258, 048, 246

*/

// end function
function e() {
    //document.getElementById("ad").innerHTML = '<input type="button" value="Restart" id="cx">';
    // cx = document.getElementById("cx");
    cx.value = "Restart";
    cx.style.display = "inline-block";
    bs += 0.1;
}

// start function
function t() {
    cx.value = "The O is first dude";
    // cx = document.getElementById("cx");    
    b = "         ";
    s = "x";
    mo = 0;
    p = true;
    bs -= 0.2;
}
