//const momento = require('moment')
import momento from 'moment'

const fechaActual = momento()
const fechaNacimento = momento('1999-03-05','YYYY-MM-DD')

if(fechaNacimento.isValid()){
    console.log(`#años = ${fechaActual.diff(fechaNacimento,'year')} `)
    console.log(`#dias = ${fechaActual.diff(fechaNacimento,'days')} `)
}