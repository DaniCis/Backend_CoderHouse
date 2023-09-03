import toyModel from '../model/toy.model.js'

class ToyService{
    async getToy(){
        try{
            const response= await toyModel.find()
            console.log(response)
            return response
        }catch(error){
            throw new Error(error.message)
        }
    }

}
export default new ToyService();