var qer = document.location.search.substring(1);
var qer2 = document.location.search.substring(2);
var prmt = qer.split('=');
var qt = decodeURIComponent(prmt[1]).split("&");
var nd = new Date();
var hdt = new Date();
let m = -1; // -1 = undefined, 0 = clock, 1 = timer
if (decodeURIComponent(prmt[0]) === "t") {
    document.getElementById("ti").textContent = qt[0];
    if (qt[1] === "u") {
        hdt.setTime(parseInt(prmt[2])); // 1710489600000 <= this is what i wanted to use
        m = 1;
    } else {
        m = 0;
    }
} else {
    m = 0;
}
var nt = null;
var j = hdt.getTime() - nd.getTime();
var rm = new Date();
var mi = "";
var s = "";
var ms;
rm.setTime(j);
var d = "";
var di = 0;
function clc() {
    nd = new Date();
    j = hdt.getTime() - nd.getTime();
    rm.setTime(j);
    if (m === 0) {
        zer(nd);
        dmy(nd);
    } else if (m === 1) {
        zer(rm);
        dmy(rm);
    }
    nt = `${rm.getHours()}時間${mi}分`;
    document.getElementById("cl").textContent = nt;
    document.getElementById("d").textContent = d;
    document.getElementById("s").textContent = `${s}.${ms}秒`;
    if (j < 0) {
        document.getElementById("cl").textContent = `0時間00分`;
        document.getElementById("d").textContent = `0日`;
        document.getElementById("s").textContent = `0.000秒`;
    }
    if (m === 0) {
        document.getElementById("d").textContent = null;
        document.getElementById("cl").textContent = `${nd.getFullYear()}/${nd.getMonth() + 1}/${di} `;
        document.getElementById("s").textContent = `${nd.getHours()}:${mi}:${s}.${ms}`;
    }
}

function zer(v) {
    if (v.getMinutes() < 10) {
        mi = "0" + v.getMinutes();
    } else {
        mi = v.getMinutes();
    }
    if (v.getSeconds() < 10) {
        s = "0" + v.getSeconds();
    } else {
        s = v.getSeconds();
    }
    if (v.getMilliseconds() < 10) {
        ms = "00" + v.getMilliseconds();
    } else if (v.getMilliseconds() < 100) {
        ms = "0" + v.getMilliseconds();
    } else {
        ms = v.getMilliseconds();
    }
}

function dmy(v) {
    di = v.getDate() - (m === 1);
    if (rm.getMonth() > 0 && m === 1) {
        di = "30+";
    }
    if (di < 10 && m === 0) {
        di = "0" + di;
    }
    d = `${di}日`;
}

clc();
setInterval(clc, 0);
