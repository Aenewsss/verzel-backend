const Cars = require('../models/Car');

class MainController {
    listAll(req, res) {
        Cars.find((err, cars) => {
            res.status(200).send({cars});
        });
    }

    async getCarById(req, res) {
        const { id } = req.params;

        try {
            let car = await Cars.findById(id);

            res.status(200).send({car});
        } catch (error) {
            res.status(404).send({error});
        }

    }
}

module.exports = new MainController();