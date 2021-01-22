<?php
$tab[1]="Ain"; $tab[2]="Allier"; $tab[27]="Eure"; $tab[28]="Eure et Loir"; $tab[29]="Finistère"; $tab[33]="Gironde"; foreach($tab as $cle=>$valeur) {
if($tab[$cle][0]=="E") {$result=$tab[$cle]; goto info;} else $result="Pas de résultat";
}
echo $result; 
exit; info: 
echo "Premier trouvé = ",$result; ?>