const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    passWord: {
        type: String,
    }
});

const UserModel = mongoose.model('auth',userSchema);

module.exports = UserModel;
