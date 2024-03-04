import express from 'express';
import * as CommonLogin from "../Controllers/CommonLogin.js";
    
const router = express.Router();


router.post('/signup', CommonLogin.signupUser);
router.post('/login', CommonLogin.loginUser);
router.get('/getUser/:id', CommonLogin.getUserById);
router.get('/getUser', CommonLogin.getUser);


export default router;
