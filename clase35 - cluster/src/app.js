import cluster from 'cluster'
import {cpus} from 'os'

const numeroNucleos = cpus().length
console.log(numeroNucleos)

onsole.log( "\u001b[1;31m Red message" )
console.log( "\u001b[1;32m Green message" )
console.log( "\u001b[1;33m Yellow message" )
console.log( "\u001b[1;34m Blue message" )
console.log( "\u001b[1;35m Purple message" )
console.log( "\u001b[1;36m Cyan message" )

console.log(cluster.isPrimary)

if(cluster.isPrimary){
    let i;
    console.log('Generamos un proceso trabajador')
    for(i=1; i < numeroNucleos;i++){
        cluster.fork()
    }
}else{
    console.log('al ser un proceso forkeado no esun primario entonces po defecto soy worker')
    console.log(`mi numero de indentificacion es ${process.id}`)
}