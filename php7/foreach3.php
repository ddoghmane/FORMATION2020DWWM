<?php
//Création d'un tableau associatif
for($i=0;$i<=8;$i++) {
$tabass["client".$i] = rand(100,1000); }
//Lecture des clés et des valeurs
foreach($tabass as $cle=>$val) 
{echo " Le client de login <b>$cle</b> a le code <b>$val</b><br />";}
?>