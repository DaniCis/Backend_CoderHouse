import usersModel from "../../schemas/users.schema.js";

export class UsersDAO{
     async getUsers(){
        const users = await usersModel.find().lean()
        return users
     }
     async getUsersById(id){
        const users = await usersModel.findOne({_id:id})
        return users
     }
     async createUser(payload){
        const users = await usersModel.create(payload)
        return users
     }

}