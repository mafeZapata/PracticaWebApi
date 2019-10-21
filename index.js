const express = require('express')
const app = express()

// Recibir json por http methods (body-parser)
app.use(express.json())
app.use('/homeEstudiantes', (request, response) => {
    response.send("CRUD ESTUDIANTES")
})

app.use('/homeCursos', (request, response) => {
    response.send("CRUD CURSOS")
})

const cursosRouter = require('./routes/cursosRouter')
app.use(cursosRouter)

const estudiantesRouter = require('./routes/estudiantesRouter')
app.use(estudiantesRouter)


app.use('/', (request, response) => {
    response.send("Not Found")
})


const port = 3000
//Levantar el servidor, parametros (port, callback= funcion)
app.listen(port, ()=>{
console.log('El api esta corriendo en el http://localhost:'+port);

})