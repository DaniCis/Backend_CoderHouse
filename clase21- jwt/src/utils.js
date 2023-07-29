import jwt from "jsonwebtoken";

const KEY = "CoderTokenSecret"

export const generateToken =(user)=>{
    const token = jwt.sign({user},KEY,{expiresIn:'12h'})
    return token
}

export const authToken =(req,res, next)=>{
    const headerAuth = req.headers.authorization
    if(!headerAuth)
        return res.status(401).send({status:"error", error:'no esta autorizado'})
    console.log(headerAuth)

    const token = headerAuth.split(' ')[1]
    jwt.verify(token,KEY,(error,credentials)=>{
        console.log(error)
        if(error)
            return res.status(401).send({status:"error", error:'no esta autorizado'})

        req.user = credentials.user
        next()
    })
}