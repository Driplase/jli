var movO = false
var pX = 0;
var pY = 0;
var cX = 0;
var cY = 0;
var cCh = "▒";
var dt = document.getElementById("txS");
var tc = document.getElementById("txS").textContent;
var resl = "";

function txE() {
    var cnT = 0;
    while(cnT > cX) {
        resl += " ";
        cnT += 1;
    }
    resl += cCh;
    tc = resl;
}

document.addEventListener("click", function () {
    document.body.requestPointerLock();
	movO = true;
});


function mvd(event) {
	if (movO === true) {
		pX += event.movementY / 4;
		pY += event.movementX / 4;
        cX = Math.floor(pX);
        cY = Math.floor(pY);
	}
}

document.addEventListener("keypress", function(event) {
	if (event.code == "Escape") {
			movO = false;
	}
});

document.addEventListener("mousemove", mvd);
