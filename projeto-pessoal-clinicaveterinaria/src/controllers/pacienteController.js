class PacienteController {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }

    async registrarPaciente(req, res) {
        try {
            const pacienteData = req.body;
            const novoPaciente = await this.pacienteService.registrarPaciente(pacienteData);
            res.status(201).json(novoPaciente);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async buscarPaciente(req, res) {
        try {
            const { id } = req.params;
            const paciente = await this.pacienteService.buscarPaciente(id);
            if (!paciente) {
                return res.status(404).json({ message: 'Paciente não encontrado' });
            }
            res.status(200).json(paciente);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listarPacientes(req, res) {
        try {
            const pacientes = await this.pacienteService.listarPacientes();
            res.status(200).json(pacientes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const pacienteAtualizado = await this.pacienteService.atualizarPaciente(id, dadosAtualizados);
            if (!pacienteAtualizado) {
                return res.status(404).json({ message: 'Paciente não encontrado' });
            }
            res.status(200).json(pacienteAtualizado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const resultado = await this.pacienteService.deletarPaciente(id);
            if (!resultado) {
                return res.status(404).json({ message: 'Paciente não encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default PacienteController;