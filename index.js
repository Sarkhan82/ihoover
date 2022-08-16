var canvas = document.getElementById('room');
var ctx = canvas.getContext("2d");
var homeSize = 550; // Permet de modifier la taille de la maison (taille totale de la grille).
var roomSize = 50; // Permet de modifier la taille de la pièce (taille d'un carré de la grille).
var x = 265; // position x de l'aspirateur
var y = 260; // position y de l'aspirateur
var yreverse = 0; // permet de modifer la valeur y lorsque l'aspirateur dit son emplacement pour être dans le bon sens
var lon = 20; // longueur de l'aspirateur
var lar = 30; // largeur de l'aspirateur
var pos = "N"; // orientation de l'aspirateur
var text = document.getElementById('text');
var gridPatterns = function () {
    //Permet de dessiner la grille 
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, homeSize, homeSize);
    for (var i = roomSize; i <= homeSize; i = i + roomSize) {
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(i, roomSize);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(i, homeSize);
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(roomSize, i);
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(homeSize, i);
        ctx === null || ctx === void 0 ? void 0 : ctx.strokeStyle;
        ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    }
};
var update = function () {
    // Permet l'affichage de l'aspirateur et de créer les animations de mouvement de l'aspirateur.
    gridPatterns();
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(x, y, lon, lar);
    setTimeout(update, 500);
};
var G = function () {
    // Permet de changer l'orientation de l'aspirateur vers la gauche. (exemple si l'aspirateur est au nord il sera alors orienté vers l'ouest).
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
    // Permet de changer l'orientation de l'aspirateur vers la droite. (exemple si l'aspirateur est au nord il sera alors orienté vers l'est).
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
    // Permet de faire avancer d'une case l'aspirateur en fonction de son orientation (si l'aspirateur est orienté vers le nord il avancera d'une case vers le nord)
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
var reverse = function () {
    // Prend la variable y et incrémente la variable yreverse avec la valeur attendu (lorsque sur y je suis en 4 je veux afficher 6 dans yreverse car l'axe y est dans l'autre sens que celui attendu)
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
var refreshText = function () {
    // permet d'afficher en temps réel l'emplacement de l'aspirateur
    text.innerHTML = "Je me trouve en x=".concat(Math.floor(x / 50), " et en y=").concat(yreverse, " mon orientation est ").concat(pos);
};
setInterval(refreshText, 100);
var sayWhereIAm = function () {
    // Fait en sorte que l'aspirateur fasse un console.log de son emplacement
    console.log("Je me trouve en x=".concat(Math.floor(x / 50), " et en y=").concat(yreverse, " mon orientation est ").concat(pos));
};
var program = function () {
    //Permet de créer le programme de l'aspirateur en lancent une suite de fonction qui seront effectuer chaque seconde.
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
update();
program();
