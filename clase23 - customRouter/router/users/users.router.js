import  RuteoApp from '../app.router.js'

export default class userRouter extends RuteoApp{
    init(){
        this.get('/',["PUBLIC"],(req,res)=>{
            res.sendSuccess("Holaaa Chicos")
        });

        this.get('/admin',["ADMIN","USER"],(req,res)=>{
            console.log("paso por la ruta")
            res.sendSuccess(req.user)
        });
        this.get('/admin_form',["ADMIN"],(req,res)=>{
            console.log("paso por la ruta 2")
            res.sendSuccess(req.user)
        });
    }
}