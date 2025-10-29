import jwt from 'jsonwebtoken';
import  User from '../models/user.js';

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido.' });
        }

        try {
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            req.user = user;
            next();
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
    });
};

export default authMiddleware;