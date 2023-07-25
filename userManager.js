import fs from 'fs'
import crypto from 'crypto'

const path ="./files/Usuarios.json"

class userManager{

    getUsuarios = async() => {
        if(fs.existsSync(path)){
            const datos = await fs.promises.readFile(path,'utf-8')
            const usuarios = JSON.parse(datos)
            return usuarios;
        }else return []
    }
    crearUsuario = async(usuario)=>{
        const usuarios = await this.getUsuarios()
        usuario.salt = crypto.randomBytes(128).toString('base64')
        usuario.contrasena = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex')
        usuarios.push(usuario)
        await fs.promises.writeFile(path,JSON.stringify(usuarios,null,'\t'))
        return usuario
    }
    validarUsuario = async (username,contrasena)=>{
        const usuarios = await this.getUsuarios()
        const usuarioEncontrado = usuarios.findIndex(u => u.nombre_usuario === username)
        if(usuarioEncontrado === -1){
            console.log('Usuario no encontrado')
            return
        }
        const usuario = usuarios[usuarioEncontrado]
        const contrasenaUsuario = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex')
        usuarios.push(usuario)

        if(contrasenaUsuario === contrasena){
            console.log('Usuario Ingresado con exito')
        }else{
            console.log('Contrasena invalida')
        }
    }
}

const manager = new userManager()

const proceso = async () =>{
    let usuarios = await manager.getUsuarios()
    //console.log(usuarios)

    let usuario ={
        nombre: "Daniela",
		apellido: "Cisneros",
		nombre_usuario: "danicis",
		contrasena: "12345",
    }
    //await manager.crearUsuario(usuario)
    
    let consulta = await manager.getUsuarios()
    //console.log(consulta)
    await manager.validarUsuario('danicis','12345')
}

proceso()
