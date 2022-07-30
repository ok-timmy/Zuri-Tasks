const express = require('express');

const router = express.Router();
const controller = require('../controller/todoController');

// router.get('/', controller.example)

router.get('/all', controller.allTodo)
router.get('/:id', controller.singleTodo)
router.post('/newFlight', controller.newTodo);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo) 


module.exports = router;

