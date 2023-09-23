export default class userRepository{
    constructor(dao){
        this.dao=dao
    }
    getAllUser=()=>{
        return this.dao.getAll()
    }
    getUserById=(id)=>{
        return this.dao.getById(id)
    }
    createUser=(user)=>{
        return this.dao.saveUser(user)
    }
    update=(id,user)=>{
        return this.dao.updateUser(id,user)
    }
}