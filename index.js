var canvas = document.getElementById('room');
var ctx = canvas.getContext("2d");
var x = 265;
var y = 260;
var yreverse = 0;
var lon = 20;
var lar = 30;
var pos = "N";
var text = document.getElementById('text');
var G = function () {
    switch (pos) {
        case "N":
            pos = "W";
            lon = 30;
            lar = 20;
            break;
        case "W":
            pos = "S";
            lon = 20;
            lar = 30;
            break;
        case "S":
            pos = "E";
            lon = 30;
            lar = 20;
            break;
        case "E":
            pos = "N";
            lon = 20;
            lar = 30;
            break;
        default:
            console.log("Problème de commande");
    }
};
var D = function () {
    switch (pos) {
        case "N":
            pos = "E";
            lon = 30;
            lar = 20;
            break;
        case "W":
            pos = "N";
            lon = 20;
            lar = 30;
            break;
        case "S":
            pos = "W";
            lon = 30;
            lar = 20;
            break;
        case "E":
            pos = "S";
            lon = 20;
            lar = 30;
            break;
        default:
            console.log("Problème de commande");
    }
};
var A = function () {
    switch (pos) {
        case "N":
            y -= 50;
            break;
        case "W":
            x -= 50;
            break;
        case "S":
            y += 50;
            break;
        case "E":
            x += 50;
            break;
        default:
            console.log("Problème de commande");
    }
};
var clearScreen = function () {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, 500, 500);
    for (var i = 50; i <= 550; i = i + 50) {
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(i, 50);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(i, 550);
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(50, i);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(550, i);
        ctx === null || ctx === void 0 ? void 0 : ctx.strokeStyle;
        ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    }
};
var update = function () {
    clearScreen();
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(x, y, lon, lar);
    setTimeout(update, 500);
};
update();
var reverse = function () {
    switch (Math.floor(y / 50)) {
        case 1:
            yreverse = 9;
            break;
        case 2:
            yreverse = 8;
            break;
        case 3:
            yreverse = 7;
            break;
        case 4:
            yreverse = 6;
            break;
        case 5:
            yreverse = 5;
            break;
        case 6:
            yreverse = 4;
            break;
        case 7:
            yreverse = 3;
            break;
        case 8:
            yreverse = 2;
            break;
        case 9:
            yreverse = 1;
            break;
        case 10:
            yreverse = 0;
            break;
        default:
            y;
    }
};
var sayWhereIAm = function () {
    console.log("Je me trouve en x=".concat(Math.floor(x / 50), " et en y=").concat(yreverse, " mon orientation est ").concat(pos));
};
var programm = function () {
    setTimeout(D, 1000);
    setInterval(reverse, 100);
    setTimeout(A, 2000);
    setTimeout(D, 3000);
    setTimeout(A, 4000);
    setTimeout(D, 5000);
    setTimeout(A, 6000);
    setTimeout(D, 7000);
    setTimeout(A, 8000);
    setTimeout(A, 9000);
    setTimeout(sayWhereIAm, 9200);
};
programm();
var refreshText = function () {
    text.innerHTML = "Je me trouve en x=".concat(Math.floor(x / 50), " et en y=").concat(yreverse, " mon orientation est ").concat(pos);
};
setInterval(refreshText, 100);
