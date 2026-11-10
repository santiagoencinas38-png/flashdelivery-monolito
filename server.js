const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./database');

const Restaurante = require('./models/Restaurante');
const Repartidor = require('./models/Repartidor');
const Cliente = require('./models/Cliente');
const Pedido = require('./models/Pedido');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));

// RUTAS RESTAURANTES
app.get('/api/restaurantes', async (req, res) => res.json(await Restaurante.find()));
app.post('/api/restaurantes', async (req, res) => {
  try {
    const nuevo = new Restaurante(req.body);
    res.json(await nuevo.save());
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// RUTAS REPARTIDORES
app.get('/api/repartidores', async (req, res) => res.json(await Repartidor.find()));
app.post('/api/repartidores', async (req, res) => {
  try {
    const nuevo = new Repartidor(req.body);
    res.json(await nuevo.save());
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// RUTAS CLIENTES
app.get('/api/clientes', async (req, res) => res.json(await Cliente.find()));
app.post('/api/clientes', async (req, res) => {
  try {
    const nuevo = new Cliente(req.body);
    res.json(await nuevo.save());
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// RUTAS PEDIDOS
app.get('/api/pedidos', async (req, res) => res.json(await Pedido.find()));
app.post('/api/pedidos', async (req, res) => {
  try {
    const nuevo = new Pedido(req.body);
    res.json(await nuevo.save());
  } catch (err) { res.status(400).json({ error: err.message }); }
});
app.delete('/api/pedidos/:id', async (req, res) => {
  try {
    await Pedido.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pedido eliminado correctamente' });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`?? Servidor corriendo en http://localhost:${PORT}`));
