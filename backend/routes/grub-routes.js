const express = require('express');

const grubControllers = require('../controllers/grub-controllers');

const router = express.Router();


router.get('/:locationStr', grubControllers.getGrub);

module.exports = router;