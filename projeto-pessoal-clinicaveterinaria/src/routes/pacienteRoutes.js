const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para registrar um paciente
router.post('/', authMiddleware.verifyToken, pacienteController.registerPaciente);

// Rota para buscar todos os pacientes
router.get('/', authMiddleware.verifyToken, pacienteController.getAllPacientes);

// Rota para buscar um paciente por ID
router.get('/:id', authMiddleware.verifyToken, pacienteController.getPacienteById);

// Rota para atualizar um paciente
router.put('/:id', authMiddleware.verifyToken, pacienteController.updatePaciente);

// Rota para deletar um paciente
router.delete('/:id', authMiddleware.verifyToken, pacienteController.deletePaciente);

module.exports = router;