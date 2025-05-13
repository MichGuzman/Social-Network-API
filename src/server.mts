import express from 'express';
import mongoose from 'mongoose';

let routes;

console.log('⏳ Cargando módulos...');

// 🔁 Conecta directamente desde aquí
try {
  await mongoose.connect('mongodb://localhost:27017/socialNetworkDB');
  console.log('✅ Conexión directa a MongoDB exitosa');
} catch (err) {
  console.error('❌ Error al conectar a MongoDB:', err);
  process.exit(1);
}

try {
  routes = (await import('./routes/index.js')).default;
  console.log('✅ Rutas importadas');
} catch (err) {
  console.error('❌ Error al importar rutas:', err);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Ya no es necesario esperar mongoose.connection.once('open')
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
