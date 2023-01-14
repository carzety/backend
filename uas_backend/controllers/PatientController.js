const Patient = require("../models/Patient");

class PatientController {
    async index(req, res) {
    const patients = await Patient.all();

    if (patients.length > 0 ) {
    const data = {
        message: "Get All Resource",
        data: patients,
    };

    return res.status(200).json(data);
}
    const data = {
        message: "Data patients is empty",
    };
    return res.status(200).json(data);
}

    async store(req, res) {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
    const data = {
        message: "All fields must be filied correctly",
    };
    return res.status(422).json(data);
}
    const newPatient = await Patient.create(req.body);
    const data = {
        message: "Resource is added succesfully",
        data: newPatient,
    };

    return res.status(201).json(data);
}

    async update(req, res) {
    const { id } = req.params;
    const patients = await Patient.find(id);

    if (patients) {
        const updatePatient = await Patient.update(id, req.body);

        const data = {
            message: "Resoruce is update succesfully",
            data: updatePatient,
        };
        
        res.status(200).json(data);
    } else {
        const data = {
            message: "Resource not found",
        };

        res.status(404).json(data);
    }
}

    async destroy(req, res) {
    const { id } = req.params;
    const patients = await Patient.find(id);

    if (patients) {
        await Patient.delete(id);
        const data = {
            message: "Resource is delete succesfully",
        };
        res.status(200).json(data);
    } else {
        const data = {
            message: "Resource not found",
        };

        res.status(404).json(data);
    }
}

    async show(req, res) {
        const { id } = req.params;
        const searchPatient = await Patient.find(id);

        if (searchPatient) {
            const data = {
                message: "Get Detail Resource",
                data: searchPatient,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async search(req, res) {
      const name = req.params.name;
      const patients = await Patient.search(name);

      if(patients) {
        const data = {
          message: "Get Searched Resource",
          data: patients,
        };

        res.status(200).json(data);
      } else {
        const data = {
          message: "Resource not found",
        };

        res.status(404).json(data);
      }
    }

    async positive(req, res) {
      const status = `positive`;
      const patients = await Patient.findByStatus(status);

      const data = {
        message: "Get Positive Resource",
        data: patients,
      };

      res.status(200).json(data);
    }

    async recovered(req, res) {
      const status = `recovered`;
      const patients = await Patient.findByStatus(status);

      const data = {
        message: "Get Recovered Resource",
        data: patients,
      };

      res.status(200).json(data);
    }

    async dead(req, res) {
      const status = `dead`;
      const patients = await Patient.findByStatus(status);

      const data = {
        message: "Get Dead Resource",
        data: patients,
      };

      res.status(200).json(data);
    }
}

  const object = new PatientController();
  
  module.exports = object;