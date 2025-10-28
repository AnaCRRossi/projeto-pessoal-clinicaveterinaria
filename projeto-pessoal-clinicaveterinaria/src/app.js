const express = require('express');
const mongoose = require('mongoose');
const pacienteRoutes = require('./routes/pacienteRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/pacientes', pacienteRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/clinicaveterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conexão com o banco de dados estabelecida.');
})
.catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

// Start server
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});