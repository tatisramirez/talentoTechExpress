const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    modelo: {
        type: Number,
        required: true,
        validate: {
            validator: function(modelo){
                return modelo > 1900;
            },
            message: props => props.value + " No es un modelo válido"
        }
    },
    placa: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(placa){
                return /^[A-Z]{3}\d{3}$/.test(placa);
            },
            message: props => props.value + " No es una placa válida"
        }
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    cilindraje: {
        type: Number,
        required: true,
        validate: {
            validator: function(cilindraje){
                return cilindraje > 800;
            },
            message: props => props.value + " No es un cilindraje válido"
        }
    },
    linea: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true,
        validate: {
            validator: function(capacidad){
                return capacidad > 0 & capacidad < 7;
            },
            message: props => props.value + " No es una capacidad válido"
        }
    }
})

module.exports = mongoose.model('carro', CarroSchema)