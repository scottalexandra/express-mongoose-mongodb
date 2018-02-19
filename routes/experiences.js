const express = require('express');
const router = express.Router();
const experiencesController = require('../controllers/experiencesController');

router.post('/experiences', experiencesController.create);

module.exports = router;
