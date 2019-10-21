const express = require('express')
const router = express.Router()

const EstudiantesController = require('../controllers/estudiantesController')
const misEstudiantes = new EstudiantesController()

// ENRUTADO DE ESTUDIANTES
router.get('/estudiantes/', (request, response) => {
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misEstudiantes.obtenerEstudiantes()
    respuesta.mensaje = "Estudiantes consutados"
    response.send(respuesta)
})

router.post('/estudiantes/', (request, response) => {
    let estudiante = request.body
    misEstudiantes.agregarEstudiantes(estudiante)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = estudiante
    respuesta.mensaje = "El estudiante ha sido agregado"
    response.send(respuesta)
})

router.delete('/estudiantes/:id', (request, response) => {
    let id = request.params.id
    misEstudiantes.eliminarEstudiantes(id)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "El estudiante se ha eliminado correctamente"
    response.send(respuesta)
})

router.put('/estudiantes/:id', (request, response) => {
    let id = request.params.id
    let estudiante = request.body
    misEstudiantes.modificarEstudiantes(id, tarea)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "El estudiante ha sido modificado"
    response.send(respuesta)
})

module.exports = router