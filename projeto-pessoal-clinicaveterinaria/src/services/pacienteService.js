const Paciente = require('../models/paciente');

class PacienteService {
    async registrarPaciente(dadosPaciente) {
        // Validação dos dados do paciente
        if (!dadosPaciente.nome || !dadosPaciente.idade || !dadosPaciente.especie) {
            throw new Error('Dados do paciente inválidos');
        }

        const paciente = new Paciente(dadosPaciente);
        return await paciente.save();
    }

    async buscarPacientePorId(id) {
        const paciente = await Paciente.findById(id);
        if (!paciente) {
            throw new Error('Paciente não encontrado');
        }
        return paciente;
    }

    async listarPacientes() {
        return await Paciente.find();
    }

    async atualizarPaciente(id, dadosAtualizados) {
        const paciente = await Paciente.findByIdAndUpdate(id, dadosAtualizados, { new: true });
        if (!paciente) {
            throw new Error('Paciente não encontrado');
        }
        return paciente;
    }

    async removerPaciente(id) {
        const paciente = await Paciente.findByIdAndDelete(id);
        if (!paciente) {
            throw new Error('Paciente não encontrado');
        }
        return paciente;
    }
}

module.exports = new PacienteService();