import express from 'express';
import { getusers, userProfile } from '../controller/userProfile-controller.js';
import { verifyToken } from '../middleware/tokenVerify.js';

const router = express.Router();

router.get('/getusers', verifyToken, getusers);
router.get('/:id', verifyToken, userProfile);

export { router as userProfileRouter }