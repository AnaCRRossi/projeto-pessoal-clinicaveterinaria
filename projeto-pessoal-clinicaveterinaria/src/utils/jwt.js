const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Troque por uma chave secreta mais segura

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
    };
    const options = {
        expiresIn: '1h', // O token expira em 1 hora
    };
    return jwt.sign(payload, secretKey, options);
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null; // Retorna null se o token não for válido
    }
};

module.exports = {
    generateToken,
    verifyToken,
};