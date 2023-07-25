import { fileURLToPath } from 'url'
import { dirname } from 'path'
import multer from 'multer'

const __filename = fileURLToPath(import.meta.url) //leyendo url del archivo
const __dirname =  dirname(__filename)

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,__dirname+'public/images')
        console.log("ubicacion"+callback)
    },
    filename: function(req,file,callback){
        console.log(file)
        callback(null,file.originalname)
    }
})


export const uploader = multer({storage})