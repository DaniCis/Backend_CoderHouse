import getDAOS from "../daos.factory.js";
import { SaveContactDTO} from "../dtos/contacts.dto.js";

const {contactsDAO}= getDAOS();

export class ContactsRepository{
    constructor(){
        this.dao= contactsDAO;
    }
    async getAllContacts(){
        return await this.dao.getAll();
    }
    async saveContact(payload){
        const contactPayload = new SaveContactDTO(payload)
        return await this.dao.save(contactPayload)
    }
}