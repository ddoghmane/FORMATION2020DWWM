<?php
$personne = "1685-1750 Jean-Sébastien Bach";
$format="%d-%d %s %s"; 
$nb = sscanf($personne,$format,$ne,$mort,$prenom,$nom); 
echo "$prenom $nom né en $ne, mort en $mort <br />"; echo "Nous lisons $nb informations";
?>