<?php
for ($i = 0; $i < 10; $i++) {
    for ($j = 0; $j < 10; $j++) {
        for ($k = 0; $k < 10; $k++) {
            if (($i + $j + $k) % 3 == 0) continue 3;
            echo "$i : $j : $k <br /> ";
        }
    }
}
?>