const mongoose = require('mongoose');

const DireccionSchema = new mongoose.Schema({
  calle: { type: String, required: true },
  numero: { type: String, required: true },
  zona: { type: String, required: true }
});

const ClienteSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  direccion: DireccionSchema
});

module.exports = mongoose.model('Cliente', ClienteSchema, 'clientes');
