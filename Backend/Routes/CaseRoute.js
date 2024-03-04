import express from 'express';
import * as CaseController from "../Controllers/CaseController.js";
    
const router = express.Router();


router.post('/addCase', CaseController.addCase);
router.get('/getCase', CaseController.getCase);


export default router;
