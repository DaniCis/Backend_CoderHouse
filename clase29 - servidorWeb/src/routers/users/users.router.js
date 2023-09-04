import {Router} from 'express'
import { UsersController } from '../../controllers/users.controllers.js'

const router =Router ()

router.get('/', UsersController.getUsers)
router.get('/:uid', UsersController.getUsersById)
router.post('/', UsersController.createUsers)

export default router