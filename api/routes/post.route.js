import { create } from "../controllers/post.controller.js";
import { verifyToken } from '../utils/verifyUser.js'; 
import express from 'express'; 

const router = express.Router(); 

router.post('/create', verifyToken, create)

export default router; 