import { Router } from 'express';
import userController from '../controller/user.controller.js'

const router = Router()

router.get("/", userController.getUsers);  
router.post("/", userController.createUser);
router.post("/:uid/courses/:cid", userController.registerUserToCourse);
  

export default router;