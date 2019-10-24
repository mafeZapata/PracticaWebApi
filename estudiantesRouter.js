const express = require('express')
const router = express.Router()

const EstudiantesController = require('../controllers/estudiantesController')
const misEstudiantes = new EstudiantesController()

// ENRUTADO DE ESTUDIANTES
router.get('/estudiantes/', (request, response) => {
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misEstudiantes.obtenerEstudiantes().then(()=>{
respuesta.mensaje = "Estudiantes consutados"
    response.send(respuesta)
    }).catch((error)=>{
        respuesta.mensaje = "Estudiantes NO consutados"
        response.send(error)
    })
    
})

router.post('/estudiantes/', (request, response) => {
    let estudiante = request.body
    misEstudiantes.agregarEstudiantes(estudiante)
    .then(()=>{
        let respuesta = {}
        respuesta.estado = true
        respuesta.informacion = estudiante
        respuesta.mensaje = "El estudiante ha sido agregado"
        response.send(respuesta)
    }).catch((error)=>{
let respuesta = {}
    respuesta.estado = false
    respuesta.informacion = estudiante
    respuesta.mensaje = "El estudiante NO ha sido agregado"
    response.send(error)
    })
    
})

router.delete('/estudiantes/:id', (request, response) => {
    let id = request.params.id
    misEstudiantes.eliminarEstudiantes(id).then(()=>{
 let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "El estudiante se ha eliminado correctamente"
    response.send(respuesta)
    }).catch((error)=>{
        let respuesta = {}
        respuesta.estado = false
        respuesta.informacion = {}
        respuesta.mensaje = "El estudiante  NO se ha eliminado correctamente"
        response.send(error)
    })
   
})

router.put('/estudiantes/:id', (request, response) => {
    let id = request.params.id
    let estudiante = request.body
    misEstudiantes.modificarEstudiantes(id, tarea).then(()=>{
let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "El estudiante ha sido modificado"
    response.send(respuesta)
    }).catch((error)=>{
        let respuesta = {}
        respuesta.estado = false
        respuesta.informacion = {}
        respuesta.mensaje = "El estudiante NO ha sido modificado"
        response.send(error)
    })
    
})

module.exports = router