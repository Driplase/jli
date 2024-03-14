var qer = document.location.search.substring(1);
var qer2 = document.location.search.substring(2);
var prmt = qer.split('=');
var qt = decodeURIComponent(prmt[1]).split("&");
var nd = new Date();
var hdt = new Date();
if (decodeURIComponent(prmt[0]) === "t") {
    document.getElementById("ti").textContent = qt[0];
    if (qt[1] === "u") {
        hdt.setTime(parseInt(prmt[2])); // 1710489600000 <= this is what i wanted to use
    }
}
var nt = null;
var j = hdt.getTime() - nd.getTime();
var rm = new Date();
var mi = "";
var s = "";
rm.setTime(j);
var d = "";
var di = 0;
function clc() {
    nd = new Date();
    j = hdt.getTime() - nd.getTime();
    rm.setTime(j);
    zer();
    nt = `${rm.getHours()}時間${mi}分`;
    document.getElementById("cl").textContent = nt;
    dmy()
    document.getElementById("d").textContent = d;
    document.getElementById("s").textContent = `${s}.${rm.getMilliseconds()}秒`;
    if (j < 0) {
        document.getElementById("cl").textContent = `0時間0分`;
        document.getElementById("d").textContent = `0日`;
        document.getElementById("s").textContent = `0.000秒`;
    }
}

function zer() {
    if (rm.getMinutes() < 10) {
        mi = "0" + rm.getMinutes();
    } else {
        mi = rm.getMinutes();
    }
    if (rm.getSeconds() < 10) {
        s = "0" + rm.getSeconds();
    } else {
        s = rm.getSeconds();
    }
}

function dmy() {
    di = rm.getDate() - 1;
    if (rm.getMonth() > 0) {
        di = "30+"
    }
    d = `${di}日`;
}

clc();
setInterval(clc, 0);
