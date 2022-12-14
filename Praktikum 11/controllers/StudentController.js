// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");

class StudentController {
    index(req, res) {
        // TODO 4: Tampilkan data students
        
        const data = {
            message: "Menampilkan semua students",
            data: students,
        };

        res.json(data);
    }

    store(req, res) {
        const {nama} = req.body;

        // TODO 5: Menambahkan data students
        const data = {
            message: `Menambahkan data student: ${nama}`,
            data: students,
        };

        res.json(data);
    }

    update(req, res) {
        const {id} = req.params;
        const {nama} = req.body;

        // TODO 6: Mengupdate data students
        // code here
        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
            data: students,
        };

        res.json(data);
    }

    destroy(req, res) {
        const {id} = req.params;

        // TODO 7: Menghapus data students
        const data = {
            message: `Menghapus student id ${id}`,
            data: students,
        };

        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;