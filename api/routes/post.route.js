import { create, deletepost, getposts } from "../controllers/post.controller.js";
import { verifyToken } from '../utils/verifyUser.js'; 
import express from 'express'; 

const router = express.Router(); 

router.post('/create', verifyToken, create);
router.get('/getposts', getposts); 

router.delete('/deletepost/:postId/:userId', verifyToken, deletepost); 

export default router; 

//for deleting we want to make sure that the owner of the post is the one trying to delete and if he's an admin or not; 