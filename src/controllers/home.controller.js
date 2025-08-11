+8
-4

import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const homeController = async (req, res) => {
  try {
    const serviciosPath = path.join(__dirname, '../data/servicios.json');
    const serviciosData = await readFile(serviciosPath, 'utf-8');
    const servicios = JSON.parse(serviciosData);

    const equipoPath = path.join(__dirname, '../data/equipo.json');
    const equipoData = await readFile(equipoPath, 'utf-8');
    const equipo = JSON.parse(equipoData);

    res.render('index', { servicios, equipo });
  } catch (error) {
    console.error('Error al cargar servicios:', error);
    res.status(500).send('No se pudieron cargar los servicios.');
  }
};