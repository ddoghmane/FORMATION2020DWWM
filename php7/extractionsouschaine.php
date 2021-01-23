<?php
$ch = "Perette et le pot au lait. C'est pas de pot!" ; $ssch = substr ($ch, 8, 9) ;
echo $ssch,"<br />" ;
$ssch = substr($ch,8);
echo $ssch ,"<br />";
$ch2="pot";
$nb=substr_count($ch,$ch2);
echo "Le mot $ch2 est présent $nb fois dans $ch <br />"; $ch3=str_replace('pot','bol',$ch);
echo $ch3,"<br />" ;
?>