class TickerManager {
    constructor() {
        this.eventos = []
        this.precioBaseDeGanancia = 0
    }

    getEventos() {
        console.table(this.eventos)
    }

    getNewId() {
        return this.eventos.length + 1
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha) {
        let nuevoEvento = {
            id: this.getNewId(),
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes: []
        }
        this.eventos.push(nuevoEvento)
    }


    // condición ? valorSiVerdadero : valorSiFalso

    buscarEvento(id) {
        let evento = this.eventos.find((elem) => { return elem.id == id })
        return evento
    }



    agregarUsuario(eventoId, usuarioId) {
        let evento = this.buscarEvento(eventoId)
        if (evento != undefined) {
            evento.participantes.push(usuarioId)
            console.log("Agregar Usuario, Evento encontrado: ", evento)

        } else {

            console.log("Agregar Usuario, Evento ID no existe.")
        }
    }

    ponerEventoEnGira(id, nuevaLocalidad, nuevaFecha) {
    }

}

let manager = new TickerManager()

manager.agregarEvento("WOS", "Estadio Obras", 4600, 2800, "23 / 12 / 2023")
manager.agregarEvento("Elbow", "Palermo Groove", 8200, 2000, "15 / 6 / 2023")
manager.agregarEvento("Qsenx", "La Trastienda", 8200, 2000, "14 / 6 / 2023")
manager.agregarEvento("La Renga", "Estadio Velez", 50600000, 2000, "01 / 7 / 2023")

manager.agregarUsuario(3, 267)
manager.agregarUsuario(4, 12)
manager.agregarUsuario(1, 854)

manager.getEventos()