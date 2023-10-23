const express = require('express');
const routerApi = require('./routes/');
const sequelize = require('./config');
const tasks = require('./tasks')

// const {
//   faker
// } = require('@faker-js/faker');

const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
});

app.get('/json', (req, res) => {
  res.json([{
      name: 'task_1',
      todo: 'ir a odonto'
    },
    {
      name: 'task_1',
      todo: 'ir a odonto'
    }
  ])
});



app.listen(port, () => {
  console.log("Running on port: " + port)
})


const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

sequelize.sync()
  .then(() => {
    console.log('Tabla creada en la base de datos');
  })
  .catch(err => {
    console.error('Error al crear la tabla:', err);
  });

// Crear un nuevo usuario
// tasks.create({ name: 'misth_legrand', description: 'prepare the meal' })
//   .then(user => {
//     console.log('Tarea creada:', tasks);
//   })
//   .catch(err => {
//     console.error('Error al crear la tarea:', err);
//   });
