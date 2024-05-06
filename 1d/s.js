var qer = document.location.search.substring(1);
var prmt = qer.split('=');
var d = 100;
var n = 100;
var r;
if (decodeURIComponent(prmt[0]) === "n") {
    document.getElementById("ti").textContent = `1d${prmt[1]}`;
    n = prmt[1];
    console.log(`customized! 1d${n}`);
} else {
    console.log("default! 1d100");
}

function dice() {
    r = Math.ceil(Math.random() * n);
    document.getElementById("d").textContent = r;
}

dice();