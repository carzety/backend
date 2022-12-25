const Student = require("../models/Student");

class StudentController {
    index(req, res) {
        Student.all(function (students) {
            const data = {
                message: "Menampilkan semua data students",
                data: students,
            };
            res.json(data);
        });
    }
async index(req, res) {
    const students = await Student.all();

    const data = {
        message: "Menampilkan semua data students",
        data: students,
    };

    res.json(data);
}

store(req, req) {
    const { nama } = req.body;
    const data = {
        message: "Menambahkan data student: ${nama}",
        data: [],
    };
    res.json(data);
}

update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    const data = {
        message: "Mengedit data student ${id}, nama ${nama}",
        data: [],
    };
    res.json(data);
}

destroy(req, res) {
    const { id } = req.params;
    const data = {
        message: "Menghapus data student ${id}",
        data: [],
    };
    res.json(data);
}
}

const object = new StudentController();

module.exports = object;