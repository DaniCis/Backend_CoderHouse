export class UsersController{
    static async getUsers(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }

    static async getUsersById(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }
    static async createUsers(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }
}