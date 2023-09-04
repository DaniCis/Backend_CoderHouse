export class ContactsMemoryDAO{
    constructor(){
        this.contacts=[]
    }

    async getAll(){
        return this.contacts
    }
}