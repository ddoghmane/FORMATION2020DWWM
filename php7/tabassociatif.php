<?php
$tab2["zéro"] = 2003;
$tab2['un'] = 31.14E7;
$tab2["deux"] = "PHP";
//***La ligne suivante provoque une erreur si elle est décommentée //echo "<p> Vous utilisez $tab2['deux'] <br />";
//***on écrira à la place:
echo "<p> Vous utilisez {$tab2['deux']} <br />"; define("CTE","lang");//Crée la constante CTE
$tab2["lang"] = " PHP ET MySQL";
$tab2[CTE] = " ASP.NET";
$tab2["CTE"] = "JAVA";
echo "Le nombre d'éléments est ", count($tab2),"<br />";
echo "L'élément \$tab2[\"CTE\"] vaut ",$tab2["CTE"],"<br / >";
echo "L'élément \$tab2[CTE] vaut ",$tab2[CTE],"<br />";
echo "<p> Le langage préféré de l’open source est{$tab2["lang"]} <br />"; ?>