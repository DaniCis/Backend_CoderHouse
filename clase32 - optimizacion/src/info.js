export const generateUserError =(user)=>{
    return `Las propiedades no estan completas.
        el primer nombre ${user.first_name}
        el apellido era necesario ${user.last_name}
        el correo era obligatorio ${user.email}`
}