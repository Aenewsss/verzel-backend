const mongoose = require('mongoose');

module.exports = mongoose.model('Car', mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor, insira um nome"]
    },
    brand: {
        type: String,
        required: [true, "Por favor, insira uma marca"]
    },
    model: {
        type: String,
        required: [true, "Por favor, insira um modelo"]
    },
    image: {
        type: String,
        required: [true, "Por favor, insira uma imagem"]
    }
}))