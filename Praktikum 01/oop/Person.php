<?php
class Person
{
    public $nama;
    public $domisili;
    public $jurusan;

    //Membuat method (function)
    public function setNama($data)
    {
        $this->nama = $data;
    }

    public function setDomisili($data)
    {
        $this->alamat = $data;
    }

    public function setJurusan($data)
    {
        $this->jurusan = $data;
    }

    public function getNama()
    {
        return $this->nama;
    }

    public function getDomisili()
    {
        return $this->domisili;
    }

    public function getJurusan()
    {
        return $this->jurusan;
    }
}

//Membuat objek dari class Person
$Aya = new Person();

$Aya->nama = "Cahaya Arzeti";
$Aya->domisili = "DKI Jakarta";
$Aya->jurusan = "Teknik Informatika";

echo $Aya->nama;
echo "<br>";
echo $Aya->domisili;
echo "<br>";
echo $Aya->jurusan;

echo "<br>";
echo "<br>";

$Aya->setNama = "Cahaya Arzeti";
$Aya->setDomisili = "DKI Jakarta";
$Aya->setJurusan = "Teknik Informatika";

echo $Aya->getNama();
echo "<br>";
echo $Aya->getDomisili();
echo "<br>";
echo $Aya->getJurusan();