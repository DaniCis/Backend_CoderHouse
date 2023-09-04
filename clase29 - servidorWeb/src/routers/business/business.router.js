import {Router} from 'express'
import { BusinessController } from '../../controllers/business.controllers.js'

const router =Router ()

router.get('/', BusinessController.getBusiness)
router.get('/:bid', BusinessController.getBusinessById)
router.post('/', BusinessController.createBusiness)
router.post('/:bid/products', BusinessController.addProductsBusiness)

export default router