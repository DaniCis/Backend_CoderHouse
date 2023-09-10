import express, { urlencoded } from "express"
import userRouter from './router/user.js'
import errorMiddle from './middleware/indexControlError.js'

const app= express()
app.listen(8080,()=>console.log('server up'))

app.use(express.json())
app.use('/api/users',userRouter)
app.use(errorMiddle)