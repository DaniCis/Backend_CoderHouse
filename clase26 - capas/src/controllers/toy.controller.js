import toyService from "../services/toy.service.js";
import {STATUS} from '../utils/constantes.js'

class ToyController{
    createToy(req,res){
        console.log("Crearé juguetes")
    }

    async getToy(req,res){
        try{
            const result = await toyService.getToy()
            console.log("Estoy mostrando los juguetes")
            res.status(201).json({status:STATUS.SUCCESS})
        }catch(error){
            res.status(400).json({
                error:error.message,
                status:STATUS.FAIL
            })
           }
    }
    getToys(req,res){
        console.log("Creare juguetes")
    }
}

export default new ToyController();