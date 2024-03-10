const l = location.hostname;
document.title = `${document.title} | ${l}`

if (l === "j.hide.li") {
    document.getElementById("o0").innerHTML = null;
    document.getElementById("logo").src = "/assets/logo/jhideli.png";
}

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
var slepY = 0;
var slep = document.getElementById("sleep");
var sLeepa = slep.style;

window.addEventListener("load", function () {

    window.onmousemove = function (event) {
        curXpos = event.clientX;
        curYpos = event.clientY;
    };
});

setInterval(ctjm, 5);

function ctjm() {
    wtSzW = window.innerWidth;
    wtSzH = window.innerHeight;
    grT = document.getElementById("main").style;
    grT.transform = "translateY(" + wtSzH + "px)";
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
    spasstyl.transform = "translate(" + iX + "px, " + iY + "px)";
    sLeepa.transform = "translateY(" + slepY + "px)";
}