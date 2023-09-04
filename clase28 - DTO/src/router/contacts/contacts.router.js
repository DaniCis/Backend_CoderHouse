import { Router } from "express";
import { ContactController } from "../../controller/contacts.controller.js";

const router = Router();

router.get('/', ContactController.getAllContacts)
router.post('/', ContactController.saveContact)

export default router