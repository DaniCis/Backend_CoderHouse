export class BusinessController{
    static async getBusiness(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }

    static async getBusinessById(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }
    static async createBusiness(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }

    static async addProductsBusiness(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }
}