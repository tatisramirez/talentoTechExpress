// var name = "Juan"
// console.log("hola", name)

// var edad = 25
// if (edad >=18){
//     console.log("Puede votar")
// }else{
//     console.log("No puede votar")
// }

// Configuración de express
const express = require('express') //Importando libreria
const app = express() //Inicializamos la variable de la libreria
const port = 3000 // Definimos puerto a usar

const mongoose = require('mongoose'); // Importo la libreria mongoose

// Obtengo la cadena de conexion del archivo .env
require('dotenv').config()
const DB_CONNECTION = process.env.DB_CONNECTION || ''
mongoose.connect(DB_CONNECTION) // Creo la cadena de conexion


// Importando las rutas del otro archivo
app.use(express.urlencoded({extended: true})) // Acceder a a información de las urls
app.use(express.json()) // Analizar información en formato JSON

const UsuarioRoutes = require('./routes/UsuarioRoutes')
app.use('/', UsuarioRoutes)

const CarroRoutes = require('./routes/CarroRoutes')
app.use('/', CarroRoutes)


// Creando el servicio web
// res -> Response -> Respuesta
// req -> Request -> Información de entrada
app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.get('/saludar', (req, res) =>{
    res.send("Hola")
})

app.get('/saludar/:nombre/:edad', (req, res) =>{
    var nombre = req.params.nombre
    var edad = req.params.edad
    res.send("Hola, me llamo " + nombre + " y tengo " + edad)
})

app.get('/despedirse', (req, res) =>{
    res.send("Adios")
})

app.get('/despedirse/:nombre', (req, res) =>{
    var nombre = req.params.nombre
    res.send("Adios " + nombre)
})

app.get('/ayuda', (req, res) =>{
    res.send("Help!!")
})

app.get('/ingles', (req, res) =>{
    res.send("Hello :)")
})

app.get('/otros', (req, res) =>{
    res.send("Esta es otra opción")
})

app.get('/mascota/:tipo', (req, res) =>{
    var tipo = req.params.tipo
    var animal = ""
    if (tipo == "perro"){
        animal = "Guau"
    }else if (tipo == "gato"){
        animal = "Miau"
    }else if (tipo == "pajaro"){
        animal = "Pio pio"
    }else if (tipo == "vaca"){
        animal = "Muuu"
    }else{
        animal = "No conozco el animal"
    }
    res.send(animal)
})

//Solicitud POST
app.post('/usuario', (req, res) =>{
    res.send("Estoy creando un usuario")
})

//Solicitud PUT
app.put('/usuario', (req, res) =>{
    res.send("Estoy actualizando un usuario con PUT")
})

//Solicitud PATCH
app.patch('/usuario', (req, res) =>{
    res.send("Estoy actualizando un usuario con PATCH")
})

//Solicitud DELETE
app.delete('/usuario', (req, res) =>{
    res.send("Estoy eliminando un usuario")
})

//Ejecutamos el servidor
app.listen(port, () =>{
    console.log("Listen on " + port)
})