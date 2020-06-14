var a = []; /*Déclaration d'un tableaux vide */
var a = [1, 2, 3];/*Déclaration d'un tableaux avec des valeurs*/
//console.log(a[2]);/*Accéder a un éléments du tableau*/
//a[2] = "la valeur 2";//Modification de la valeur situé a l'index 2

//a[6] = "la valeur 7";/*Ajout d'une valeur a l'index 6(n'existe pas)*/
//delete a[1];/*Effacer une valeur*/
//var b = [1, "deux", false, null, undefined];/*un tableau peut contenir différents types de données...*/
//var c = [1, "deux", false, null, [1, 2, 3]];/*Meme d'autres tableaux (tab a 2D)*/
//console.log(a[4][1]);/*Pour accéder au tab dans le tableaux*/

var d = [1, 2, 3];
d[2] = "la valeur 2";
d[6] = "la valeur 6";
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [d, e, f];
console.log(d[0]);
console.log(d);
console.log(g);
console.log(g[1][1]);