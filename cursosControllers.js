class Cursos {
    constructor() {
        this.listaCursos = []
    }

    obtenerCursos() {
        return this.listaCursos
    }

    agregarCursos(curso) {
        this.listaCursos.push(curso)
    }

    modificarCursos(id, curso) {
        let index = this.listaCursos.findIndex(element => element.id==id)
        this.listaCursos.splice(index,1,curso)
    }

    eliminarCursos(id) {
        let index = this.listaCursos.findIndex(element => element.id==id)
        this.listaCursos.splice(index,1)
    }

}

module.exports = Cursos