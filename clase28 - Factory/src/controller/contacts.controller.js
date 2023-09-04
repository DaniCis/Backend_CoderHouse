import { successResponse } from "../utils/utils.js";

import getDAOS from "../models/daos.factory.js";

const {contactsDAO}= getDAOS();

export class ContactController {
    static async getAllContacts(req,res,next){
        try{
            const contacts = await contactsDAO.getAll();
            const response = successResponse(contacts);
            res.status(200).json(response)

        }catch(error){
            next(error)
        }
    }
}