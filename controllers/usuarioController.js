const UserSchema = require("../models/usuarios") // Accedemos a los datos del modelo
const bcrypt = require('bcrypt') // Importamos la libreria de encriptacion

class UsuarioController{
       
    async getUsuarios(req, res){
        var usuarios = await UserSchema.find();
        res.json(usuarios)
    }

    async createUsuario(req, res){

        // Encriptando la contraseña
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
       
        var nuevoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            password: hashedPassword, // Guardo la contraseña hasehada
        }


        await UserSchema(nuevoUsuario).save()
        .then((result) => { // Cuando se ejecuta correctamente
            res.send({"status": "success", "message": "Usuario Guardado correctamente"})
        }).catch((error) => { // Cuando hay un error
            res.send({"status": "error", "message": error.message})
        })
    }

    async getUsuarioById (req, res){
        var id = req.params.id
        var usuario = await UserSchema.findById(id)
        res.json(usuario)
    }

    async updateUsuario(req, res){

        var id = req.params.id;
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        var updateUser = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            password: hashedPassword,
        }

        await UserSchema.findByIdAndUpdate(id, updateUser, { new: true })
        .then((result) => { // Cuando se ejecuta correctamente
            res.send({"status": "success", "message": "Usuario Actualizado correctamente"})
        }).catch((error) => { // Cuando hay un error
            res.send({"status": "error", "message": error.message})
        })

    }

    async deleteUsuario(req, res){
        var id = req.params.id

        await UserSchema.deleteOne({_id: id})

        res.json({"status": "success", "message": "Usuario Eliminador correctamente"})
    }

    async login(req, res){
        // Capturo el correo y la contraseña ingresados
        var correo = req.params.correo;
        var password = req.params.password

        // Buscar el usuario por el correo
        var usuario = await UserSchema.findOne({correo})
        if(usuario){
            // Comparar la contraseña ingresada con la registrada por el usuario
            var verificacionClave = await bcrypt.compare(password, usuario.password)
        }else{

        }

    }


}

module.exports = UsuarioController