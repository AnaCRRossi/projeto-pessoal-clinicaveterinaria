const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dono', // Referência ao modelo Dono
        required: true
    },
    consultas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consulta' // Referência ao modelo Consulta
    }]
}, { timestamps: true });

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;