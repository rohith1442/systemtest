import {Router} from 'express';

import AuthController from '../controllers/auth.controller.js';

const router = Router();
const authController = new AuthController();

router.post('/register',authController.register);
router.get('/health',authController.healthCheck);


export default router;