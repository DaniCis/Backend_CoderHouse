import {Router} from 'express'
import usersRouter from './users/users.router.js'
import ordersRouter  from './orders/orders.router.js'
import businessesRouter from './business/business.router.js'

const router = Router ()

router.use('/users', usersRouter)
router.use('/business',businessesRouter )
router.use('/orders', ordersRouter)

export default router