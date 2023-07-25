import mongoose from "mongoose";
import orderModel from "./models/order.js";

const enviroment =async ()=>{
    await mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority')

    let result = await orderModel.insertMany (
        [
            {name: "Carnes", size:"small",price:10,quantity:5, date:"2023-02-08"},
            {name: "Queso", size:"medium",price:15,quantity:10, date:"2023-02-08"},
            {name: "Colombiana", size:"medium",price:10,quantity:25, date:"2023-02-08"},
            {name: "Queso", size:"medium",price:5,quantity:1, date:"2023-02-08"},
            {name: "Colombiana", size:"large",price:16,quantity:5, date:"2023-02-08"},
        ]
    )
    console.log(result)
    let orders = await orderModel.aggregate([
        {
            //filtrando por el tamaño de las pizzas
            $match : {size: "medium"}
        },
        {
            //agrupar por cantidad
            $group: {_id:"$name", totalQuantity:{$sum:"$quantity"}}
        },
        {
            //ordenar de mayor a menor
            $sort:{ totalQuantity:-1}
        },
        {
            /*guardamos todos los documentos de la agregacion en un nuevo documento dentro de un arreglo
            con el nombre orders
            $$ROOT toma todo documento para insertar sino toca atributo por atributo*/
            $group: {_id:1, orders :{$push:"$$ROOT"}}
        },
        {
            /** Utilizaremos project para generar un nuevo ObjectId para guardalo sin haber coincidencias*/
            $project:{"_id":0, orders:"$orders" }
        },
        {
            /* STAGE que siempre debe ser la ultima
            Agregar los elementos a una neuva coleccion "reports" */
            $merge:{
                into: 'reports' 
            }
        }
    ])
    console.log(orders);
}
enviroment();