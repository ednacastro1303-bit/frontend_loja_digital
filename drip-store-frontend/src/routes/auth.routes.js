const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/index');

const routes = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key-change-in-production';

routes.post('/register', async (req, res) => {
    try {
        const { firstName, surname, email, password } = req.body;

        if (!firstName || !surname || !email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
        }

        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'Este email já está cadastrado' });
        }

        const user = await User.create({
            firstName,
            surname,
            email,
            password
        });

        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            user: { id: user.id, firstName: user.firstName, surname: user.surname, email: user.email },
            token
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
});

routes.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Preencha email e senha' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Login realizado com sucesso',
            user: { id: user.id, firstName: user.firstName, surname: user.surname, email: user.email },
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
});

module.exports = routes;
