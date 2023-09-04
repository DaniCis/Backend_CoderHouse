import CONFIG from "../config/config.js";

let contactsDAO;

switch(CONFIG.DATASOURCE){
    case "MEMORY":{
        const { ContactsMemoryDAO } = await import("../models/daos/memory/contacts.memory.daos.js");
        contactsDAO = new ContactsMemoryDAO();
        break;
    }
    case "MONGO":{
        const { ContactsMongoDAO }= await import( "../models/daos/mongo/contacts.mongo.daos.js");
        contactsDAO = new ContactsMongoDAO();
        break;
    }
    default:{
        throw new Error("No digitaste una persistencia valida")
    }
}

const getDAOS =() =>{
     return {
        contactsDAO,
     }
}


export default getDAOS