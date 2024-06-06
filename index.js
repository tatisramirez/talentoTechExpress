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

//
app.post('/otros', (req, res) =>{
    res.send("Esta es otra opción")
})

//
app.put('/otros', (req, res) =>{
    res.send("Esta es otra opción")
})

//
app.delete('/otros', (req, res) =>{
    res.send("Esta es otra opción")
})

//
app.get('/otros', (req, res) =>{
    res.send("Esta es otra opción")
})

//Ejecutamos el servidor
app.listen(port, () =>{
    console.log("Listen on " + port)
})