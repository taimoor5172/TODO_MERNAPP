const express = require('express');
const router = express.Router();


const control = require('../controllers/taskController');

router.post('/tasks',control.addTask);
router.get('/tasks',control.getTasks);
router.get('/tasks/:id',control.getTask);
router.put('/tasks',control.updateTask);
router.delete('/tasks/:id',control.deleteTask);

module.exports = router;