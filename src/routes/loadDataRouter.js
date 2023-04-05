const { Router } = require('express');
const Controller = require('../controllers/loadDataController');

const router = Router();
router.post('/', Controller.loadData);

module.exports = router;
