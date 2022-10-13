<?php
class Animal
{
    public $hewan;

    #Method Constructor = mengisi data awal
    public function __construct($data)
    {
        $this->hewan = $data;
    }

    #Method index = menampilkan data animals
    public function index()
    {
        foreach ($this->hewan as $animal) {
            echo $animal . '<br>';
        }
    }

    #Method store = menambahkan hewan baru
    public function store($hewan)
    {
        array_push($this->hewan, $hewan);
    }

    #Method update = mengupdate hewan
    public function update($index, $hewan)
    {
        $this->hewan[$index] = $hewan;
    }

    #Method delete = menghapus hewan
    public function destroy($index)
    {
        unset($this->hewan[$index]);
    }
}

#Mengirimkan data hewan (array) ke constructor
$animal = new Animal(["Domba", "Sapi", "Kuda"]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";
echo "Store - Menambahkan hewan baru <br>";
$animal->store('Burung');
$animal->index();
echo "<br>";
echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Gajah');
$animal->index();
echo "<br>";
echo "Destroy - Menghapus hewan <br>";
$animal->destroy(2);
$animal->index();
echo "<br>";
echo "<b>Cahaya Arzeti_0110221033</b>";
?>