import {Router} from 'express'
import { OrdersController } from '../../controllers/orders.controllers.js'

const router =Router ()

router.get('/', OrdersController.getOrders)
router.get('/:oid', OrdersController.getOrdersById)
router.post('/', OrdersController.createOrders)
router.post('/:oid', OrdersController.resolveOrders)

export default router