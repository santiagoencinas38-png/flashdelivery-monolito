const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/flashdelivery');
    console.log(`? MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`? Error de conexión: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
