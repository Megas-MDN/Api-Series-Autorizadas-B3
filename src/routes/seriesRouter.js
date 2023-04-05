const { Router } = require('express');
const Controller = require('../controllers/seriesContreller');

const router = Router();
router.get('/', Controller.getByParams);

module.exports = router;
