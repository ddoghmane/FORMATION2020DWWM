<?php
$prix=55;
if($prix>100)
{
    echo "<b>Pour un montant d'achat de $prix &euro;, la remise est de 10 % </b>
    <br />";
echo "Le prix net est de ",$prix*0.90;
}
else
{
    echo "<b>Pour un montant d'achat de $prix &euro;, la remise est de 5 %</b><br />";
    echo "<h3>Le prix net est de ",$prix*0.95,"</h3>"; }
    ?>