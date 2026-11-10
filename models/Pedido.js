const mongoose = require('mongoose');

const DetalleSchema = new mongoose.Schema({
  producto_codigo: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio_unitario: { type: Number, required: true }
});

const EstadoSchema = new mongoose.Schema({
  orden: { type: Number, required: true },
  hora: { type: String, required: true },
  descripcion: { type: String, required: true }
});

const PedidoSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  fecha: { type: String, required: true },
  monto_total: { type: Number, required: true },
  cliente_id: { type: String, ref: 'Cliente', required: true },
  restaurante_id: { type: String, ref: 'Restaurante', required: true },
  repartidor_id: { type: String, ref: 'Repartidor', required: true },
  detalles: [DetalleSchema],
  historial_estados: [EstadoSchema]
});

module.exports = mongoose.model('Pedido', PedidoSchema, 'pedidos');
