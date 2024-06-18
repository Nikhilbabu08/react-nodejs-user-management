import express from 'express';
import { userProfile } from '../controller/userProfile-controller.js';
import { verifyToken } from '../middleware/tokenVerify.js';

const router = express.Router();

router.get('/:id', verifyToken, userProfile);

export { router as userProfileRouter }