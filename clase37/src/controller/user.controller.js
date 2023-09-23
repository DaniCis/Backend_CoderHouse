import { userService , coursesService } from "../repository/services.js";
import MailingService from "../services/mailing.js";


const getUsers = async(req,res)=>{
    let users = await userService.getAllUser();
    if(!users) return res.status(500).send({status:"error" , error: "No pudo traer los usuarios "})
    res.send({status:"success",payload: users})
}

const createUser = async(req,res)=>{
    let {firts_name,last_name,email,dni,birthDate,gender,password}= req.body
    let result =await userService.createUser({
        firts_name,
        last_name,
        email,
        dni,
        birthDate,
        gender,
        password
    })
    if(!result) return res.status(500).send({status:"error" , error: "No pudo crear los usuarios "})
    res.send({status:"success",payload: result})
}
const registerUserToCourse =async (req,res)=>{

    const {uid,cid}=req.params;
    const user= await userService.getUserById({_id:uid})
    if(!user) return  res.status(404).send({status:"error" , error: "No encontro el user con ese ID "})
   // validar la busqueda con el CID
    console.log("Entro hacer la validacion con el curso ")
    const course = await coursesService.getCoursesById(cid);
    if(!course) return  res.status(404).send({status:"error" , error: "No encontro el course con ese ID "})

    const courseUserExits = user.courses.some(c=>c._id.toString()===cid)
    if(courseUserExits) res.status(400).send({status:"error" , error: "El usuario ya tiene registrado el curso"})

    user.courses.push(course._id)
    course.students.push(user._id)
    await userService.update(uid,user)
    await coursesService.update(cid,course)

    const mailer = new MailingService()
    const result = await mailer.sendSimpleMail({
        from: 'coderPrueba',
        to: 'CoderPrueba',
        subject: "Curso Registrado",
        html:`<div> Su curso ha sido Registrado
        Curso: ${course.title},
        Descripcion: ${course.description}
        </div` 
    })
    console.log(result)
    res.send({status:"success", message:"Usuario registrado en el curso"})
}

export default {
    getUsers,
    createUser,
    registerUserToCourse
}