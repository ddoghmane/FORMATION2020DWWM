<?php
class Car{
    public $speed;
    public function __construct(){
        $this->speed = 0;
    }
    function start(){

        echo"Car started\n";
    }
}
$car = new Car();
$car->start();
$car->accelerate('50');