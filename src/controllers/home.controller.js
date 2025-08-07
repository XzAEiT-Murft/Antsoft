import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const homeController = async (req, res) => {
  try {
    const jsonPath = path.join(__dirname, '../data/servicios.json');
    const data = await readFile(jsonPath, 'utf-8');
    const servicios = JSON.parse(data);

    res.render('index', { servicios });
  } catch (error) {
    console.error('Error al cargar servicios:', error);
    res.status(500).send('No se pudieron cargar los servicios.');
  }
};
