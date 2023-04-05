const { Router } = require('express');
const linker = require('./linkeRouter');
const loader = require('./loadDataRouter');
const geter = require('./seriesRouter');
const errorHandler = require('../middlewares/errorHandler');
const notImplemented = require('../middlewares/notImplemented');

const router = Router();
router.get('/', (req, res) => res.sendStatus(200));
router.use('/source', linker);
router.use('/data', loader);
router.use('/search', geter);

router.use(notImplemented);
router.use(errorHandler);
module.exports = router;
