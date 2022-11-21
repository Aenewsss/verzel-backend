const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:[true, "Por favor, insira um nome de usuário"]
    },
    password: {
        type: String,
        required:[true, "Por favor, insira uma senha"]
    }
});

userSchema.methods.isCorrectPassword = (password, dbpassword, callback) => {
    bcrypt.compare(password, dbpassword, function(err, same) {
        if(err) callback(err);
        else callback(err, same);
    });
}

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
});

module.exports = mongoose.model('User', userSchema);