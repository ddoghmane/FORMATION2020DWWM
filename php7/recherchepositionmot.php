
<?php
$ch = "Perette et le pot au lait. C'est pas de pot ! La Fontaine" ;
echo "\$ch = $ch <br />";
$ch2 = "pot" ;
//recherche sensible à la casse
$n=strpos ($ch, $ch2);
echo "Le mot $ch2 commence à la position $n dans \$ch <br />" ;
//recherche insensible à la casse
$ch3 = "POT" ;
$n2=stripos($ch, $ch3);
echo "Le mot $ch3 commence à la position $n2 dans \$ch <br />" ;
//recherche de la dernière occurrence sensible à la casse
$n3=strrpos($ch, $ch2);
echo "La dernière occurrence du mot $ch2 commence à la position $n3 dans \$ch<br />" ;
//recherche sensible à la casse de l'existence d'un mot
$ch4="fontaine";
if(!strpos ($ch,$ch4)) 
{ echo "Le mot $ch4 n'est pas dans \$ch";}
?>
