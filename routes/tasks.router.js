const express = require('express');
const {
  faker
} = require('@faker-js/faker');
const tasks = require('../tasks')

const router = express.Router();

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const {
    id
  } = req.params;
  res.json({
    id,
    name: 'task_1',
    todo: 'ir a odonto'
  })
});


router.get('/', (req, res) => {
  tasks.findAll()
    .then(tasks => {
      const taskData = tasks.map(task => {
        return {
          name: task.name,
          description: task.description
        };
      });

      res.json(taskData);
    })
    .catch(err => {
      console.error('Error al obtener tareas:', err);
      res.status(500).json({
        error: 'Error al obtener tareas'
      });
    });
});


router.get('/', (req, res) => {
  const {
    limit,
    offset
  } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send("no hay parametros")
  }
});

router.get('/animalTasks', (req, res) => {
  const tasks = [];
  const {
    size
  } = req.query;
  const limit = size || 5;
  for (let index = 0; index < limit; index++) {
    tasks.push({
      descripcion: faker.animal.cat()
    })
  }
  res.json(tasks)
});

router.post('/createTask', (req, res) => {

  const {
    name,
    description
  } = req.query;

  tasks.create({
      name: name,
      description: description
    })
    .then(result => {
      const task = {
        id: result.id,
        name: result.name,
        description: result.description
      }
      res.json(task)
    })
    .catch(err => {
      console.error('Error al crear la tarea:', err);
    });

})

module.exports = router;
