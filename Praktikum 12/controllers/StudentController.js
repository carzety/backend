const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
    const students = await Student.all();

    const data = {
        message: "Menampilkan semua data students",
        data: students,
    };

    res.json(data);
}

    async store(req, res) {
    const { nama, nim, email, prodi } = req.body;

    await Student.create(nama, nim, email, prodi);

    const newStudent = { nama, nim, email, prodi };

    const data = {
        message: "Menambahkan data student",
        data: newStudent,
    };

    res.json(data);
}

    async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, prodi } = req.body;

    await Student.update(id, nama, nim, email, prodi);

    const updateStudent = { nama, nim, email, prodi };
    const data = {
        message: "Mengedit student id ${id}, nama ${nama}",
        data: updateStudent,
    };
    res.json(data);
}

    async destroy(req, res) {
    const { id } = req.params;

    await Student.delete(id);

    const deleteStudent = id;
    const data = {
        message: "Menghapus data student id ${id}",
        data: deleteStudent,
    };
    res.json(data);
}
}

const object = new StudentController();

module.exports = object;