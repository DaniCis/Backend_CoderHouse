import {Router} from "express"
import couserController from '../controller/course.controller.js'

const router= Router();

router.get('/',couserController.getCourses)
//router.post('/',couserController.createCourse)
router.post('/',applyPolicy(['TEACHER']),couserController.createCourse)


export default router;