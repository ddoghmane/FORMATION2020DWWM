<?php
/**eee
 * @param $text text to display
 * @param $number
 * @param $var
 *
 */
function displayInformation($text, $number = 10,$var=true){
    $text = strtoupper($text);
    
   echo sprintf("%s!\n",$number);
   echo sprintf("%s!\n",$var);
   echo sprintf("%s!\n",$text);
    
}

displayInformation('Hello');
displayInformation('Julien');