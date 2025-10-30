import express from 'express';
import PatientController from '../controllers/patientController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();
const patientController = new PatientController();

// Rotas para gerenciamento de pets
router.post('/pets', authMiddleware, patientController.registerPet);
router.get('/pets/:id', authMiddleware, patientController.getPet);
router.post('/pets/:id/consultations', authMiddleware, patientController.registerConsultation);
router.get('/pets/:id/history', authMiddleware, patientController.getPetHistory);

export default router;