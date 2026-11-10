const mongoose = require('mongoose');

const LicenciaSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  tipo: { type: String, required: true },
  fecha_vencimiento: { type: String, required: true }
});

const RepartidorSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  telefonos: [{ type: String }],
  supervisor_id: { type: String, default: null },
  licencia: LicenciaSchema
});

module.exports = mongoose.model('Repartidor', RepartidorSchema, 'repartidores');
