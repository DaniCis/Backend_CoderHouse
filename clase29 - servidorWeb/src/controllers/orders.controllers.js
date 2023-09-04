export class OrdersController{
    static async getOrders(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }

    static async getOrdersById(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }
    static async createOrders(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }

    static async resolveOrders(req,res,next)
    {
       try{
           res.send("ok")
       }catch(error){
           next(error)
       }
    }
}