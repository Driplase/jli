// variables
var b = document.getElementById("btn");
var v = ["a","ai","au","ao","i","ia","io","ie","ua","ue","uo","u","e","eu","ei","o","ou","y","ei"];
var vf = ["a","ai","au","i","ei","u","e","eu","o"];
var c = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","sc","pr","dr","br","st","sk","cl","sl","wr","sw"];
var vc = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","sc","ck","rd","rg","rp","st","sk","lb","lc","ls","lk","rl","rt"];
var r1 = 0; var r2 = 0; var r3 = 0;
var rs1 = ""; var rs2 = "";
// var r = document.getElementById("r"); var rt = r.textContent;
var rtc = "";
var rst = ""; var fv = 0;

function rl() {
    r1 = Math.round(Math.random() * (c.length - 1));
    r2 = Math.round(Math.random() * (v.length - 1));
    rs1 = c[r1]; rs2 = v[r2];
    if (rs1 === rs2) {
        r1 = Math.round(Math.random() * (c.length - 1));
        r2 = Math.round(Math.random() * (v.length - 1));
        rs1 = c[r1]; rs2 = v[r2];
    }
}

function vl() {
    r2 = Math.round(Math.random() * (vf.length - 1));
    rs2 = vf[r2];
}

function cl() {
    r1 = Math.round(Math.random() * (vc.length - 1));
    rs1 = vc[r1];
}

function g() {
    rst = "";
    r3 = Math.round(Math.random() * 2) + 1;
    fv = Math.round(Math.random());
    for (let i = 0; i < r3; i++) {
        if (i !== 0 || fv === 1) {
            rl()
            rst = `${rst}${rs1}`;
        } else {
            vl();
        }
        rst = `${rst}${rs2}`;
    }
    fv = Math.round(Math.random());
    if (fv === 1) {
        cl()
        rst = `${rst}${rs1}`;
    }
    rtc = `${rtc}\r\n${rst}`;
    document.getElementById("r").textContent = rtc;
}

b.addEventListener("click", g);
