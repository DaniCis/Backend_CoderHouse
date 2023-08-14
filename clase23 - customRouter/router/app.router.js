import  {Router} from 'express'
import jwt from 'jsonwebtoken'

const user={
    name:"",
    age:"",
    role:""
}

const SECRET_ID = "secret-id";

export default class RuteoApp{

    constructor(){
        this.router = Router()
        this.init()
    }

    getRouter(){
        return this.router
    }

    init(){}
    /*get(path,...callbacks){
        this.router.get(path,this.applyCallbacks(callbacks))
    }*/

    applyCallbacks(callbacks){
        return callbacks.map(callback=>async(...params)=>{
        try{
          callback.apply(this,params)
        }catch(error){
            console.log(error)
            params[1].status(500).send(error)
        }
        })
    }

    generateResponse(req,res,next){
        res.sendSuccess = (payload,status=200 )=>res.status(status).json({status:'success',payload})
        res.sendError = (error,status=500 )=>res.status(status).json({status:'error',error})
        next();
    }

    validadorRoles(roles){
        return async (req,res,next)=>{
            
            //console.log("Entro")
            if(roles[0] === "PUBLIC"){
                console.log("paso por la ruta 1" )
                return next();
            }

            const validar =req.headers.authorization;
            if(!validar){
                //console.log(validar)
                return res.sendError("No auto",401)
            }
            const token= validar.split(" ")[1];
            const user=jwt.verify(token,SECRET_ID)
        
            //console.log(token + "  " + user)
            if(!roles.includes(`${user.role}`.toUpperCase())){
                console.log(user.role)
                return res.sendError("Acceso Denegado",403)
            }
            req.user=user;
            next();
        }
    }

    get(path,roles,...callbacks){
        this.router.get(         
            path,
            this.generateResponse,
            this.validadorRoles(roles),
            this.applyCallbacks(callbacks)
        )
    }

    post(path, roles, ...callbacks) {
        this.router.post(
          path,
          this.generateResponse,
          this.validadorRoles(roles),
          this.applyCallbacks(callbacks)
        );
      }

    put(path,roles,...callbacks){
        this.router.put(           path,
            this.generateResponse,
            this.validadorRoles(roles),
            this.applyCallbacks(callbacks)
        )
    }

    delete(path, roles, ...callbacks) {
        this.router.delete(
          path,
          this.generateResponse,
          this.validadorRoles(roles),
          this.applyCallbacks(callbacks),
        );
      }

}