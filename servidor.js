import http, {request} from 'http'

const servidor = http.createServer((request, response) =>{
    response.end('Mi primer hola mundo desde backend')
})

servidor.listen(8080, () => {
    console.log('Servidor arriba')
})