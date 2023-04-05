const { Router } = require('express');
const Controller = require('../controllers/seriesContreller');
const queryParams = require('../middlewares/queryParams');

const router = Router();
router.get('/', queryParams, Controller.getByParams);

module.exports = router;
