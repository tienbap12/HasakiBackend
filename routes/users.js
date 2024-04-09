import express from 'express';
import { userController } from '../Controllers/Index.js';

const router = express.Router();

router.post('/login', userController.login);

router.post('/register', userController.register);

router.post('/logout/:id', userController.logout);

export default router;
