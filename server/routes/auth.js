import express from 'express';
import { signupValidation, loginValidation } from '../validation.js';


const router = express.Router();

router.post('/register', signupValidation);
router.post('/login', loginValidation);

export {router as authRouter}