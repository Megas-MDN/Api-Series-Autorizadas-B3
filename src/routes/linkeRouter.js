const { Router } = require('express');
const Controller = require('../controllers/linkerController');

const router = Router();
router.get('/check', Controller.checkSource);
router.get('/', Controller.getSource);

module.exports = router;
