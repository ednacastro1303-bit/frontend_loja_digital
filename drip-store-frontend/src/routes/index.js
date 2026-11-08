const { Router } = require('express');
const HealthController = require('../controllers/HealthController');
const authRoutes = require('./auth.routes');

const routes = Router();

// Health Check
routes.get('/health', HealthController.index);

// Auth Routes
routes.use('/v1/auth', authRoutes);

module.exports = routes;
