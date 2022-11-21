const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require('./app/config/database');

class AppController {
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));
        this.express.use(cors());
    }

    routes(){
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;