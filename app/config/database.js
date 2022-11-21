const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(`Connected to database - ${process.env.MONGO_URL}`))
    .catch(e => console.log(`The following error ocurred during db connection:\n${e.message}`))