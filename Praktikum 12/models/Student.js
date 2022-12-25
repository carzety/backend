const db = require("../config/database");

class Student {
    static all() {
        return new Promise((resolve, reject) => {
          const query = "SELECT * from students";
          
          db.query(query, (err, results) => {
            resolve(results);
          });
        });
    }

    /**
     * TODO 1 : MEMBUAT FUNGSI INSERT DATA
     * METHOD MENERIMA PARAMETER DATA YANG AKAN DIINSERT
     * METHOD MENGEMBALIKAN DATA STUDENT YANG BARU DIINSER
     */
    static create(nama, nim, email, prodi) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO students (nama, nim, email, prodi, created_at) VALUES ('${nama}', '${nim}', '${email}', '${prodi}', NOW())`;
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }

    static update(nama, nim, email, prodi) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE students SET nama='${nama}', nim='${nim}', email='${email}', prodi='${prodi}', update_at=NOW() WHERE id=${id}`;
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM students WHERE id=${id}`;
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }
}

module.exports = Student;