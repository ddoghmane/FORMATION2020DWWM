<?php
$date = new DateTime();
$dateInterval = new DateInterval('P10D');//ajout 10jours

$formattedDate = $date
    ->add($dateInterval)
    ->format('d-m');

echo $formattedDate;

