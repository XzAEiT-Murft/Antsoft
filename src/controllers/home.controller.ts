import type { Request, Response } from 'express';

export const homeController = (_req: Request, res: Response) => {
  res.render('pages/index', { title: 'Bienvenido a Anthsoft 🚀' });
};
