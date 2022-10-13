<?php
function hitungLuasLingkaran($jari) {
    $phi = 3.14;
    $luasLingkaran = $phi * $jari * $jari;
    return $luasLingkaran;
}

echo hitungLuasLingkaran(5);
echo "<br>";
echo hitungLuasLingkaran(3);
echo "<br>";
echo hitungLuasLingkaran(9);