const mongoose = require('mongoose');

const SchemaSchema = new mongoose.Schema(
{
    username: { 
        type: String,
        required: true,
        unique: true
    },
    gmail: { 
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('Schema', SchemaSchema);
