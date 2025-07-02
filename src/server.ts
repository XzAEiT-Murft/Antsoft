import { config } from 'dotenv';
config();

import app from './app.ts';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
