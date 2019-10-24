const express = require('express')
const router = express.Router()

const CursoController = require('../controllers/cursosController')
const misCursos = new CursoController()

// ENRUTADO DE cursos
router.get('/cursos/', (request, response) => {
    let respuesta = {}
    respuesta.informacion = misCursos.obtenerCursos().then(()=>{
      respuesta.estado = true
    respuesta.mensaje = "el curso ha sido consultado"
    response.send(respuesta)  
    }).catch((error)=>{
        respuesta.estado = false
        respuesta.mensaje = "el curso NO ha sido consultado"
        response.send(error)  
    })
    
})

router.post('/cursos/', (request, response) => {
    let curso = request.body
    misCursos.agregarCursos(curso).then(()=>{
 let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = curso
    respuesta.mensaje = "el curso ha sido agregado"
    response.send(respuesta)
    }).catch((eror)=>{
        let respuesta = {}
    respuesta.estado = false
    respuesta.informacion = curso
    respuesta.mensaje = "el curso  NO ha sido agregado"
    response.send(error)
    })
   
})

router.delete('/cursos/:id', (request, response) => {
    let id = request.params.id
    misCursos.eliminarCursos(id).then(()=>{
        let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "El curso se ha eliminado correctamente"
    response.send(respuesta) 
    }).catch((error)=>{
        let respuesta = {}
        respuesta.estado = false
        respuesta.informacion = {}
        respuesta.mensaje = "El curso  NO se ha eliminado correctamente"
        response.send(error) 
        
    })
   
})

router.put('/cursos/:id', (request, response) => {
    let id = request.params.id
    let curso = request.body
    misCursos.modificarCursos(id, curso).then(()=>{
      let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "el curso ha sido modificado con exito"
    response.send(respuesta)  
    }).catch((error)=>{
        let respuesta = {}
        respuesta.estado = false
        respuesta.informacion = {}
        respuesta.mensaje = "el curso NO ha sido modificado con exito"
        response.send(error)  
    })
    
})

module.exports = router