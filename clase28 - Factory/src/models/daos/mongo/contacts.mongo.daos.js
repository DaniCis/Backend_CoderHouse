import { MongoManager } from "../../mongo/mongo.manager.js";
import ContactsModel from "../../schemas/contacts.schema.js";

export class ContactsMongoDAO{
    constructor(){
        MongoManager.start();
    }
    async getAll(){
        return await ContactsModel.find().lean()
    }
}