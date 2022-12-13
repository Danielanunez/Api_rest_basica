const express = require('express');
const charactersRoutes = require('./src/routes/charactersRoutes');
const mainRoutes = require('./src/routes/mainRoutes');
const path = require('path');
const app = express();
const PORT = 3000;


/*Archivos estaticos*/
app.use(express.static('public'));

/*Convierto el body en formato JSON*/
app.use(express.json());

/*Configuracion del motor de plantillas */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/*Rutas de servidor */
app.use('/', mainRoutes);
app.use('/api', charactersRoutes);

/*Puerto */
app.listen(PORT, () => console.log(`Servidor corriendo desde 🟢http://localhost:${PORT}`));