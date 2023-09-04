import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactsSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true 
  },
  last_name: {
    type: String
  },
  full_name: {
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  active: { 
    type: Boolean, 
    required: true 
  },
});

const ContactsModel = new mongoose.model(contactsCollection, contactsSchema);
export default ContactsModel;