class Estudiantes {
    constructor() {
        this.listaEstudiantes = []
    }

    obtenerEstudiantes() {
        return this.listaEstudiantes
    }

    agregarEstudiantes(estudiante) {
        this.listaEstudiantes.push(estudiante)
    }

    modificarEstudiantes(id, tarea) {
        let index = this.listaEstudiantes.findIndex(element => element.id==id)
        this.listaEstudiantes.splice(index,1,estudiante)
    }

    eliminarEstudiantes(id) {
        let index = this.listaEstudiantes.findIndex(element => element.id==id)
        this.listaEstudiantes.splice(index,1)
    }

}

module.exports = Estudiantes