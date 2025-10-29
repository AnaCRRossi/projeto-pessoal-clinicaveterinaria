import express from 'express';
import AuthController from '../controllers/authController.js';
import authService from '../services/authService.js';


const router = express.Router();
const authController = new AuthController(authService);

// Rotas de autenticação
router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

// Exemplo de rota protegida (removida pois não existe o método getProfile)
// router.get('/profile', authMiddleware, authController.getProfile);

export default router;