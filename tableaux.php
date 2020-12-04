<?php
$arr = ['1','2','3'];
$arr[] = 'Daoud';

var_dump($arr);

$arr = [
    'name'=>'Daoud',
    'age'=>'25ans',
    'location'=>[
        'city'=>'Paris'
    ]
];

echo $arr['location']['city'];




