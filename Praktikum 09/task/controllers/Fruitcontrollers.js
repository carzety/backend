/**
 * TODO 3:
 * - import fruits dari data/fruits.js
 * - refactor variable ke ES6 variable
 */

const fruits = require("../data/fruits.js");

/**
 * TODO 4:
 * - Membuat method index.
 * - Refactor function ke ES6 arrow function
 * - Menampilkan data fruits
 * 
 * @hint - Menggunakan looping for of
 */

function index() {
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

/**
 * TODO 5:
 * - Membuat method store.
 * - Refactor function ke ES6 arrow function
 * - Menambahkan data baru ke array fruits
 * 
 * @param {string} name - Nama Buah
 * 
 * @hint - Menggunakan method push
 */

function store(name) {
    fruits.push(name);
    index();
}

/**
 * TODO 6:
 * - Membuat method update.
 * - Refactor function ke ES6 arrow function
 * - Memperbarui data fruits
 * 
 * @param {number} position - Posisi index yang akan di update
 * @param {string} name - Nama data buah yang baru
 */

function update(position, name) {
    fruits[position] = name;
    index();
}

/**
 * TODO 7:
 * - Membuat method destroy.
 * - Refactor function ke ES6 arrow function
 * - Menghapus data fruits
 * 
 * @param {number} position - Posisi index yang akan di hapus
 * 
 * @hint - Menggunakan method splice
 */

function destroy(position) {
    fruits.splice(position, 1);
    index();
}

/**
 * TODO 8: export method index, destroy, store, and update
 */

module.exports = { index, store, update, destroy };