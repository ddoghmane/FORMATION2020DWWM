<?php//Création et lecture de constante
// Définition insensible à la casse
define("PI",3.1415926535,TRUE); ←
// Utilisation
echo "La constante PI vaut ",PI,"<br />";
echo "La constante PI vaut ",pi,"<br />";
// Vérification de l’existence
if (defined( "PI")) echo "La constante PI est déjà définie","<br />";
if (defined( "pi")) echo "La constante pi est déjà définie","<br />";
// Définition sensible à la casse, vérification de l’existence et utilisation
if(define("site","http://www.funhtml.com",FALSE)) ←
{
echo "<a href=\" " ,site, " \">Lien vers mon site </ a>"; }
?>