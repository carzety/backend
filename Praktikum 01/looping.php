<?php
for ($i = 0; $i <= 10; $i++) {
    echo "looping ke $i<br>";
}

$animals = ["cat", "fish", "dog"];
foreach ($animals as $animal) {
    echo $animal . '<br>';
}

$data_user = [
    'nama' => "Admin Petshop",
    'umur' => "22",
    'hewan' => "Cat",
];

foreach ($data_user as $key => $value) {
    echo $key . ':' . $value . '<br>';
}