const express = require('express')
const router = express.Router()

const CursoController = require('../controllers/cursosController')
const misCursos = new CursoController()

// ENRUTADO DE cursos
router.get('/cursos/', (request, response) => {
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misCursos.obtenerCursos()
    respuesta.mensaje = "el curso ha sido consultado"
    response.send(respuesta)
})

router.post('/cursos/', (request, response) => {
    let curso = request.body
    misCursos.agregarCursos(curso)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = curso
    respuesta.mensaje = "el curso ha sido agregado"
    response.send(respuesta)
})

router.delete('/cursos/:id', (request, response) => {
    let id = request.params.id
    misCursos.eliminarCursos(id)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "El curso se ha eliminado correctamente"
    response.send(respuesta)
})

router.put('/cursos/:id', (request, response) => {
    let id = request.params.id
    let curso = request.body
    misCursos.modificarCursos(id, curso)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "el curso ha sido modificado con exito"
    response.send(respuesta)
})

module.exports = router