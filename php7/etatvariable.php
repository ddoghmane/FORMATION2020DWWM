<?php
$a=null;
if(isset($a)){echo "\$a existe déjà<br />";} else {echo "\$a n'existe pas<br />";} if(empty($a)){echo "\$a est vide <br />";}
else {echo "\$a a la valeur $a<br />";} //Affiche "$a n'existe pas" et "$a est vide" $b=0;
if(isset($b)){echo "\$b existe déjà<br />";} else {echo "\$b n'existe pas<br />";} if(empty($b)){echo "\$b est vide <br />";}
else {echo "\$b a la valeur $b<br />";} //Affiche "$b existe déjà" et "$b est vide" $c=1;
if(isset($c)){echo "\$c existe déjà<br />";} else {echo "\$c n'existe pas<br />";} if(empty($c)){echo "\$c est vide <br />";}
else {echo "\$c a la valeur $c<br />";} //Affiche "$c existe déjà" et "$c a la valeur 1" ?>
 