
var result = "";//Structure d'une conditions if
var a = 1;
if (a == 1) {

    result = "a==1";
}
else
    console.log(result);

var result = "";//Structure d'une conditions if else
var a = 1;
if (a > 2) {

    result = "a==1";
}
else {
    result = "a n'est pas supéérieur a 2";
}
var result = "";//Structure d'une conditions if else if else
var a = 1;
if (a == 1) {

    result = "a==1";
}
else if (a == 2) {
    result = "a ==2";
}
else if (a == 3) {
    result = "a==3";
}
else {
    result = "a n'est pas egale a 1 ni 2 ni 3"
}
console.log(result);
var a = 1;//tester la présence de a (défini ou pas ?)utiliser typeof
if (typeof a == 'undefined') {
    console.error("a:" + typeof a);
}
else {
    console.log("a est défini")
}
var a = 1;//Ce code peut etre simplifié 
var result = "";
if (a == 1) {
    result = "a==1";
}
else {
    result = "a!=1";
}
var result = a == 1 ? "a==1" : a != 1;//Notatio ternaire
console.log(result);

var b = 1;
var resuult = "";

switch (b) {//Le switch

    case 1:
        result = "b==1";
        break;
    case 2:
        result = "b==2";
        break;
    default:
        result = "b!=1";
        break;



}


