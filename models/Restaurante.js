const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true }
});

const RestauranteSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  especialidades: [{ type: String }],
  productos: [ProductoSchema]
});

module.exports = mongoose.model('Restaurante', RestauranteSchema, 'restaurantes');
