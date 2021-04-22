import {Router} from 'express';
import settingsRouter from './settings.routes'; 

const router = Router();
router.use('/settings', settingsRouter);
export default router;
