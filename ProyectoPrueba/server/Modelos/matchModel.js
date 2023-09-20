

// get
// dev [informacion, informacion informacion informacion informacion informacion ]
// company [ informacion informacion informacion informacion informacion]



// ------------------------------------------------
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});


const mongoose = require('mongoose');

const devSchema = new mongoose.Schema({
  name: String,
  // Otros campos relevantes para 'dev'
});

const companySchema = new mongoose.Schema({
  name: String,
  // Otros campos relevantes para 'company'
});

const Dev = mongoose.model('Dev', devSchema);
const Company = mongoose.model('Company', companySchema);

module.exports = { Dev, Company };


const { Dev, Company } = require('./models'); // Asegúrate de que la ruta sea correcta

async function cargarYCompararDatos() {
  try {
    const devs = await Dev.find();
    const companies = await Company.find();

    // Realizar comparaciones aquí, por ejemplo:
    const devNames = devs.map(dev => dev.name);
    const companyNames = companies.map(company => company.name);

    // Comparación de nombres
    const nombresComunes = devNames.filter(name => companyNames.includes(name));

    console.log('Nombres comunes:', nombresComunes);
  } catch (error) {
    console.error('Error al cargar o comparar datos:', error);
  }
}

cargarYCompararDatos();










// cargar las dos tablas (dev - companies)
// criterios de comparacion ( habilidades - experiencia - rol - ubicacion)
// cargar los resultados de la busqueda 
// la empresa solo pueda cargar resultados de devs




// match de developer a empresa (se cargan todas las empresas que cumplen los criterios) get
// match de empresa a developer (se cargan todas las dev que cumplen los criterios) get

// presentar los resultados 1 a 1 (front) 

// el match es cuando hay like de las dos partes (solo se genera contacto despues de este criterio)

// agregar fotos de los dev y de la empresa 

