const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema(
{
    username: { 
        type: String,
        required: true,
        unique: true
    },
    gmail2: { 
        type: String,
        required: true,
        unique: false
    },
});

module.exports = mongoose.model('Auth', AuthSchema);
