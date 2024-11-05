const mongoose = require('mongoose')
const { Schema } = mongoose

const autorSchema = new mongoose.Schema({
    nombre: {
        type: Schema.Types.String,
        required: true
    },
    fechaNacimiento: {
        type: Schema.Types.Date,
        required: true
    },
    nacionalidad: {
        type: Schema.Types.String,
        required: true
    }
})

module.exports = mongoose.model('Autor', autorSchema)