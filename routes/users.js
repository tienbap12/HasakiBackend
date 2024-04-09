import express from 'express';
import { body, validationResult } from 'express-validator';
import { userController } from '../Controllers/Index.js';
import checkToken from '../Authentication/Auth.js';

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/logout/:id', userController.logout);

export default router;
