import express from 'express'; 
import cors from 'cors'
import 'dotenv/config'; 
import apis from './apiRoutes/routes.js'; 
 
const app = express();

// Habilitar CORS y parsear el cuerpo de las solicitudes a JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Montar las rutas de las APIs
app.use(apis);

// Establecer la conexión con el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
