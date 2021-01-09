<?php
class Car {

    function start(){
        echo "Car started\n";
    }
    function accelerate($speed){

        echo "Car speed :$speed\n";
    }
}
$car = new Car();
$car->start();