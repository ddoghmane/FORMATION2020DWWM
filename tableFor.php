<?php

$arr = ['Orange','Citron','Mandarine'];

foreach ($arr as & $item){

    echo sprintf("%s \n",$item);
    $item = 'orange';
}

var_dump($arr);