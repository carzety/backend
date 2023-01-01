const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
    const students = await Student.all();

    if (students.length > 0 ) {
    const data = {
        message: "Menampilkan semua data students",
        data: students,
    };

    return res.status(200).json(data);
}
    const data = {
        message: "Data student is empty",
    };
    return res.status(200).json(data);
}

    async store(req, res) {
    const { nama, nim, email, prodi } = req.body;

    if (!nama || !nim || !email || !prodi) {
    const data = {
        message: "Semua data harus terkirim",
    };
    return res.status(422).json(data);
}
    const newStudent = await Student.creat(req.body);
    const data = {
        message: `Menambahkan data student`,
        data: Student,
    };

    return res.status(200).json(data);
}

    async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
        const updateStudent = await Student.update(id, req.body);

        const data = {
            message: `Mengubah data student id ${id}`,
            data: updateStudent,
        };
        
        res.status(200).json(data);
    } else {
        const data = {
            message: `Student id ${id} not found`,
        };

        res.status(404).json(data);
    }
}

    async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
        await Student.delete(id);
        const data = {
            message: `Menghapus student id ${id}`,
        };
        res.status(200).json(data);
    } else {
        const data = {
            message: `Student id ${id} not found`,
        };

        res.status(404).json(data);
    }
}

    async show(req, res) {
        const { id } = req.params;
        const searchStudent = await Student.find(id);

        if (searchStudent) {
            const data = {
                message: `Menampilkan detail data students`,
                data: searchStudent,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: `Student id ${id} not found`,
            };

            res.status(404).json(data);
        }
    }
}

const object = new StudentController();

module.exports = object;