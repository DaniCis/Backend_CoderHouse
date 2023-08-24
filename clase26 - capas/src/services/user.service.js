import bcrypt from 'bcrypt'
import userModel from '../model/user.model.js'

class UserService{
    async createUser(data){
        try{
            data.password= bcrypt.hashSync(data.password,bcrypt.genSaltSync(10))
            const response= await userModel.create(data)
            console.log("pase a crear el usuario " +data)
            return response
        }catch(error){
            throw new Error(error.message)
        }
    }
    async getUser(email){
        try{
            const response= await userModel.findOne({email}).lean()
            console.log(response)
            return response
        }catch(error){
            throw new Error(error.message)
        }
    }

}
export default new UserService();