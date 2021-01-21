<?php
$var="3.52 kilomètres";
$var2 = (double) $var;
echo "\$var2= ",$var2,"<br />";//affiche "$var2=3.52"
$var3 = (integer) $var2;
echo "\$var3= ",$var3,"<br />";//affiche "$var3=3"
$var4 = (boolean) $var3;
echo "\$var4= ",$var4,"<br />";//affiche "$var4=1" soit la valeur true ?>

<?php
$var="3.52 kilomètres"; settype($var,"double"); echo "\$var= ",$var,"<br settype($var,"integer"); echo "\$var= ",$var,"<br settype($var,"boolean"); echo "\$var= ",$var,"<br ?>
/>";//affiche "$var=3.52"
/>";//affiche "$var=3"
/>";//affiche "$var=1" soit la valeur true avec set type?>
