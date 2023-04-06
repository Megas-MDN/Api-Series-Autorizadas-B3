const { Router } = require('express');
const Controller = require('../controllers/linkerController');

const router = Router();
router.get('/', Controller.getSource);

module.exports = router;
