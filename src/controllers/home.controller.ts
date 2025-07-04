import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const homeController = async (req: express.Request, res: express.Response) => {

  try {
    const jsonPath = path.join(__dirname, '../data/servicios.json');
    const file = await readFile(jsonPath, 'utf-8');
    const servicios = JSON.parse(file);

    res.render('pages/home', { servicios });
  } catch (error) {
    console.error('Error cargando servicios:', error);
    res.status(500).send('Error al cargar los servicios.');
  }
};
