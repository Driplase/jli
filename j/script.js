/*
J'ai aucun idée.
*/

// i dont know about this box
const box = document.getElementById("mb");
const btx = document.getElementById("bt");
// box style
var bs = box.style;
// box x; box y; rotate
var bx = 0; var by = 0; var br = 0;
// box text can input
var bt = "";
// bt length
var bl = bt.length;
// left shift pressed; right shift pressed
var ls = false; var rs = false;
// i dont know about this guy but i understood
let es1; var es2; var es3
// character position
var cp1 = 0;
// content
var con = "HALLLLOOOOOOO";

function es2() {
    if (bt === "") {
        es3 = false;
    } else if (es3 === true) {
        bl = bt.length;
        bt = bt.slice(0, (bl - 1));
    }
}

function k() {
    if (con.slice(cp1, (cp1 + 1)) !== "") {
        if (con.slice(cp1, (cp1 + 1)) !== "\r") {
            if (con.slice(cp1, (cp1 + 1)) !== "\n") {
                by += 5;
            }
        }
        bt = bt + con.slice(cp1, (cp1 + 1)); // keyboardLayoutMap.get(e.code);
        cp1 += 1;
    }
}


setInterval(es2, 20);

function d() {
    bx -= bx / 50;
    by -= by / 50;
    br -= br / 50;
    bs.transform = "translate(" + bx + "px, " + by + "px)";
    bs.rotate = br + "deg";
    btx.textContent = bt;
}

setInterval(d, 5);
setInterval(k, 78);
