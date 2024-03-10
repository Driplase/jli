/*
a a
b as  
c sp  
d asp  
e ap  
f pp  
g app  
h pop  
i apo 
j spa 
k sopa 
l apoa 
m au 
n asup 
o sp 
p op 
q apo 
r sass 
s pousa 
t sasu 
u asu 
v ups 
w sas 
x spoa 
y aspoa 
z aa
*/

var t = document.getElementById("t").value;
var r = document.getElementById("r").textContent;
var s = "";
var i = 0
var j = 0;
var k = "";

function g() {
    t = document.getElementById("t").value;
    s = "";
    j = 0;
    for (i = 0; i < t.length; i++) {
        j += 1;
        k = t.slice(j - 1, j);
        if (k === "a") {
            s = `${s}a `;
        } else if (k === "b") {
            s = `${s}as `;
        } else if (k === "c") {
            s = `${s}sp `;
        } else if (k === "d") {
            s = `${s}asp `;
        } else if (k === "e") {
            s = `${s}ap `;
        } else if (k === "f") {
            s = `${s}pp `;
        } else if (k === "g") {
            s = `${s}app `;
        } else if (k === "h") {
            s = `${s}pop `;
        } else if (k === "i") {
            s = `${s}apo `;
        } else if (k === "j") {
            s = `${s}spa `;
        } else if (k === "k") {
            s = `${s}sopa `;
        } else if (k === "l") {
            s = `${s}apoa `;
        } else if (k === "m") {
            s = `${s}au `;
        } else if (k === "n") {
            s = `${s}asup `;
        } else if (k === "o") {
            s = `${s}sp `;
        } else if (k === "p") {
            s = `${s}op `;
        } else if (k === "q") {
            s = `${s}apo `;
        } else if (k === "r") {
            s = `${s}sass `;
        } else if (k === "s") {
            s = `${s}pousa `;
        } else if (k === "t") {
            s = `${s}sasu `;
        } else if (k === "u") {
            s = `${s}asu `;
        } else if (k === "v") {
            s = `${s}ups `;
        } else if (k === "w") {
            s = `${s}sas `;
        } else if (k === "x") {
            s = `${s}spoa `;
        } else if (k === "y") {
            s = `${s}aspoa `;
        } else if (k === "z") {
            s = `${s}aa `;
        } else if (k === "A") {
            s = `${s}A `;
        } else if (k === "B") {
            s = `${s}As `;
        } else if (k === "C") {
            s = `${s}Sp `;
        } else if (k === "D") {
            s = `${s}Asp `;
        } else if (k === "E") {
            s = `${s}Ap `;
        } else if (k === "F") {
            s = `${s}Pp `;
        } else if (k === "G") {
            s = `${s}App `;
        } else if (k === "H") {
            s = `${s}Pop `;
        } else if (k === "I") {
            s = `${s}Apo `;
        } else if (k === "J") {
            s = `${s}Spa `;
        } else if (k === "K") {
            s = `${s}Sopa `;
        } else if (k === "L") {
            s = `${s}Apoa `;
        } else if (k === "M") {
            s = `${s}Au `;
        } else if (k === "N") {
            s = `${s}Asup `;
        } else if (k === "O") {
            s = `${s}Sp `;
        } else if (k === "P") {
            s = `${s}Op `;
        } else if (k === "Q") {
            s = `${s}Apo `;
        } else if (k === "R") {
            s = `${s}Sass `;
        } else if (k === "S") {
            s = `${s}Pousa `;
        } else if (k === "T") {
            s = `${s}Sasu `;
        } else if (k === "U") {
            s = `${s}Asu `;
        } else if (k === "V") {
            s = `${s}Ups `;
        } else if (k === "W") {
            s = `${s}Sas `;
        } else if (k === "X") {
            s = `${s}Spoa `;
        } else if (k === "Y") {
            s = `${s}Aspoa `;
        } else if (k === "Z") {
            s = `${s}Aa `;
        } else if (k === " ") {
            s = `${s}\r \r `;
        } else {
            s = `${s}${k} `;
        }
    }
    r = s;
    document.getElementById("r").textContent = s;
}

setInterval(g, 100);