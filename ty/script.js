/*
J'ai aucun idée.
*/

// i dont know about this box
const box = document.getElementById("mb");
const btx = document.getElementById("bt");
// box style
var bs = box.style;
// box x; box y; rotate; scale;
var bx = 0; var by = 0; var br = 0; var bz = 1;
// box text can input
var bt = ""; var tx = "";
// bt length
var bl = bt.length;
// left shift pressed; right shift pressed
var ls = false; var rs = false;
// i dont know about this guy but i understood
// nope i forgot it
let es1; var es2; var es3;
// hmm what is this
var c = "";
var k = "";
var acv = 0;
var clp = "";
// offset
var ox = 0; var oy = 0;
// idk ime thing?
var z = false;
// audio
/* const s1 = new Tone.Player("/f/assets/audio/sfx/keydown1.wav").sync().start(0);
var s1p = new Tone.PitchShift({pitch: s1pv}).toMaster();
var s1pv = 0; */
var s1 = new Audio("/f/assets/audio/sfx/keydown1.wav");
var s2 = new Audio("/f/assets/audio/sfx/1.wav");


var keyboard = navigator.keyboard;
    keyboard.getLayoutMap().then((keyboardLayoutMap) => {

addEventListener("keydown", k);
addEventListener("keyup", g);
// addEventListener("paste", p);

function es2() {
    if (bt === "") {
        es3 = false;
    } else if (es3 === true) {
        bl = bt.length;
        bt = bt.slice(0, (bl - 1));
        s(s2, Math.floor(acv * 100) / 100);
    }
}

function k(e) { // f2, f8, f9 is unused function key in browser, hmm interesting
    c = e.code;
    k = e.key;
    bl = bt.length;
    if (e.code === "Enter") {
        br += 15;
        bt = bt + "\n"
    } else if (e.code === "Space") {
        bx += 5;
        bt = bt + " "
    } else if (e.code === "Backspace") {
        bx -= 5;
        bt = bt.slice(0, (bl - 1));
        if (bt !== "") {
            s(s2, 0.1);
        }
    } else if (e.key === "Shift" || e.key === "Meta" || e.code === "ContextMenu") {
        if (e.code === "ShiftLeft" || e.code === "MetaLeft") {
            if (ls === false) {
                br -= 5; bx -= 3;
            }
            ls = true;
        } else { // (e.code === "ShiftRight") {
            if (rs === false) {
                br += 5; bx += 3;
            }
            rs = true;
        }
    } else if (e.code === "Escape" || e.code === "F5") {
        br += 360; by -= 5;
        acv = 0.1
    } else if (e.code === "ArrowRight") {
        bx += 5;
    } else if (e.code === "ArrowLeft") {
        bx -= 5;
    } else if (e.code === "ArrowDown") {
        by += 5;
    } else if (e.code === "ArrowUp") {
        by -= 5;
    } else if (e.key === "Dead") {
        br -= 1.5;
    } else if (e.key === "Hankaku") {
        z = false;
    } else if (e.key === "Zenkaku") {
        z = true;
    } else if (e.code === "KeyV" && e.ctrlKey) {
        navigator.clipboard.readText().then((clp) => {
            bt = bt + clp;
            s(s1, 0.8);
            bx += 40; by += 12; br += 8;
        });
    } else if (k.length === 1) /* keyboardLayoutMap.get(e.code) !== undefined && keyboardLayoutMap.get(e.code) !== "Hankaku"*/ {
        // if (e.)
        by += 5;
        bt = bt + e.key; // keyboardLayoutMap.get(e.code);
        s(s1, 0.8);
    } else {
        if (e.key === "Control" || e.key === "Alt") {
            // emp
        } else {
            br -= 25; bx -= 15;
        }
    }
}

function g(e) {
    if (e.code === "ShiftLeft") {
        ls = false;
    } else /* if (e.code === "ShiftRight") */ {
        rs = false;
    }
}


setInterval(es2, 20);

var iu = "";

function d() {
    keyboard = navigator.keyboard;
    /*if (getLayoutMap.get("Backquote") !== "Hankaku" || keyboard.getLayoutMap.get("Backquote") !== "Zenkaku") {
        z = false;
    }*/
    bx -= bx / 50;
    by -= by / 50;
    br -= br / 50;
    bs.transform = "translate(" + bx + "px, " + by + "px)";
    bs.rotate = br + "deg";
    tx = bt.replace(/\n/g,"\r\n");
    if (ip = "" && g) {
        btx.textContent = " ";
    }
    // s1pv = Math.floor(Math.random() * 11) - 6;
    acv -= acv / 60;
}

function s(ty, v) {
    // Tone.Transport.start();
    if (v !== 0) {
        ty.volume = v;
        ty.cloneNode(true).play();
    }
}
setInterval(d, 5);
});