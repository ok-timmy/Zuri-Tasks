const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

// router.get('/', controller.example)

router.get('/all', controller.allFlight)
router.get('/:id', controller.singleFlight)
router.post('/newFlight', controller.newFlight);
router.put('/id', controller.updateFlight);
router.delete('/id', controller.deleteFlight) 


module.exports = router;

