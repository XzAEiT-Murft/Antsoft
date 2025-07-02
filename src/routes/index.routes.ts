import { Router } from 'express';
import { homeController } from '../controllers/home.controller.ts';

const router = Router();

router.get('/', homeController);

export default router;
