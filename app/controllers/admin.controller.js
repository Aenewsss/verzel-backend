const Cars = require('../models/Car');
const Users = require('../models/User');
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_TOKEN;

class AdminController {

    async authenticate(req, res) {
        const { username, password } = req.body;

        try {
            let user = await Users.findOne({ username });

            user.isCorrectPassword(password, user.password, function (err, same) {
                if (!same) return res.status(401).send({ messege: "Usuário ou senha inválida" });

                const token = jwt.sign({ username }, secret, { expiresIn: '30d' });
                res.status(200).send({ jwt: token })
            });
        } catch (error) {
            res.status(401).send({ messege: "Usuário ou senha inválida" });
        }
    }

    async createUser(req, res) {
        const { username, password } = req.body;

        const user = new Users({ username, password })
        user.save()

        res.send({user})
    }

    listAll(req, res) {
        Cars.find((err, cars) => {
            res.status(200).send({ cars });
        });
    }

    async getCarById(req, res) {
        const { id } = req.params;

        try {
            let car = await Cars.findById(id);

            res.status(200).send({ car });
        } catch (error) {
            res.status(404).send({ error });
        }
    }

    newCar(req, res) {
        const { name, brand, model, image } = req.body;

        try {
            Cars.findOne({ name, brand, model, image }, async (err, product) => {
                if (product) return res.status(200).send({ message: 'Carro já adicionado' });
                let newCar = new Cars({ name, brand, model, image });

                await newCar.save();

                res.status(200).send({ newCar });
            })
        } catch (error) {
            res.status(404).send({ error });
        }
    }

    async removeCar(req, res) {
        const { id } = req.params;

        try {
            let car = await Cars.findByIdAndDelete(id);

            await car.save();

            res.status(200).send({ car });
        } catch (error) {
            res.status(404).send({ error });
        }
    }

    async updateCar(req, res) {
        const { car } = req.body;
        const { id } = req.params;

        try {
            let newCar = await Cars.findByIdAndUpdate(
                id,
                car
            );

            await newCar.save();

            res.status(200).send({ newCar });
        } catch (error) {
            res.status(404).send({ error });
        }
    }
}

module.exports = new AdminController();