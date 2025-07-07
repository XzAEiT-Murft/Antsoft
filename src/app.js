import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import router from './routes/index.routes.js';

// Configurar rutas de archivos con ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config();

// Crear app de Express
const app = express();

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', router);

export default app;