import express from 'express';
import { signupValidation, loginValidation } from '../middleware/validation.js';
import { login, register } from '../controller/auth-controller.js';


const router = express.Router();

router.post('/register', signupValidation, register);
router.post('/login', loginValidation, login);

export { router as authRouter }