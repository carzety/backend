const { resolve } = require("path");
const db = require("../config/database");

class Patient {
    static all() {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * from patients";
          
          db.query(sql, (err, results) => {
            resolve(results);
          });
        });
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            db.query(sql, data, (err, results) => {
                resolve(results.insertId);
            });
        });

        const patients = this.find(id);
        return patients;
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                const [patients] = results;
                resolve(patients)
            })
        })
    }

    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        const patients = this.find(id);
        return patients;
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    static search(name) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE name like '%$(name)%";

            db.query(sql, name, (err, results) => {
                const [patients] = results;
                resolve(patients);
            });
        });
    }

    static findByStatus(status) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE status = ?";

            db.query(sql, status, (err, results) => {
                resolve(results);
            });
        });
    }
}

module.exports = Patient;