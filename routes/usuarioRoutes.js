const express = require('express') // Importando libreria
const UsuarioController = require('../controllers/UsuarioController') // Importando el controlador
const app = express() // Inicializamos la variable de la libreria
const controller = new UsuarioController(); // Creando una instancia

// Creamos nuestros servicios web
app.get('/usuario', controller.getUsuarios) // Obtengo todos los usuarios
app.post('/usuario', controller.createUsuario) // Creo un usuario
app.get('/usuario/:id', controller.getUsuarioById) // Consulto un usuario
app.put('/usuario/:id', controller.updateUsuario) // Actualizo un usuario
app.delete('/usuario/:id', controller.deleteUsuario) // Elimino un usuario
app.post('/login', controller.login) // Login

module.exports = app