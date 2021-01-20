<?php
//Affectation par valeur de $mavar1 et $mavar2
$mavar1="Paris";
echo "\$mavar1= ",$mavar1,"<br />";
$mavar2="Lyon";
echo "\$mavar2= ",$mavar2,"<br />";
//Affectation par référence de $mavar2
$mavar2 = &$mavar1;
echo "Affectation par référence de \$mavar2 <br />"; echo "\$mavar1= ",$mavar1,"<br />";
echo "\$mavar2= ",$mavar2,"<br />";
echo "modification de \$mavar1 <br />"; $mavar1="Nantes";
echo "\$mavar1= ",$mavar1,"<br />";
echo "\$mavar2= ",$mavar2,"<br />";
echo "modification de \$mavar2 <br />"; $mavar2="Marseille";
echo "\$mavar1= ",$mavar1,"<br />";
echo "\$mavar2= ",$mavar2,"<br />";
?>