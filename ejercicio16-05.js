class TicketManager{

	#precioBaseGanancia = 0.15

	constructor(){
		this.eventos = []
	}

	getEventos = () =>  this.eventos
	
	agregarEvento = (nombre, lugar, precio, capacidad=50, fecha = new Date().toLocaleDateString()) => {
		const evento = {
			nombre, 
			precio: precio + precio * this.#precioBaseGanancia, 
			lugar, 
			capacidad, 
			fecha, 
			participantes: []
		}
		if(this.eventos.length === 0)
			evento.id = 1
		else
			evento.id= this.eventos[this.eventos.length-1].id+1
		
		this.eventos.push(evento)
	}

	agregarUsuario = (idEvento, idUsuario) =>{

		const eventoId = this.eventos.findIndex(e=> e.id === idEvento)
		if(eventoId === -1){
			console.log('Evento no encontrado')
			return
		}
		const usuarioRegistrado = this.eventos[eventoId].participantes.includes(idUsuario)
		if(usuarioRegistrado){
			console.log('Usuario ya registrado')
			return
		}
		this.eventos[eventoId].participantes.push(idUsuario)
	}

	ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {
		const eventoIndex = this.eventos.findIndex(e=> e.id === idEvento)
		if(eventoIndex === -1){
			console.log('Evento no encontrado')
			return
		}
		
		const evento = this.eventos[eventoIndex]
		const nuevoEvento = {
			...evento, 
			lugar: nuevaLocalidad,
			fecha: nuevaFecha, 
			id: this.eventos[this.eventos.length -1 ].id+1,
			participantes:[]
		}
		this.eventos.push(nuevoEvento)
	}
}

const manejadorDeEventos = new TicketManager();
manejadorDeEventos.agregarEvento('EventoCoder', 'Argentina', 200);
manejadorDeEventos.agregarEvento('EventoDani', 'Ecuador', 100);
manejadorDeEventos.agregarUsuario(1,2);
manejadorDeEventos.agregarUsuario(2,1);
manejadorDeEventos.agregarUsuario(4,2);
manejadorDeEventos.agregarUsuario(1,2);
manejadorDeEventos.ponerEventoEnGira(1,'Chile','11/11/2011');
console.log(manejadorDeEventos.getEventos())