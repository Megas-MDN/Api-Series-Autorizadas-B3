const { Router } = require('express');
const path = require('path');
const linker = require('./linkeRouter');
const loader = require('./loadDataRouter');
const geter = require('./seriesRouter');
const errorHandler = require('../middlewares/errorHandler');
const notImplemented = require('../middlewares/notImplemented');

const router = Router();
router.get('/', (_req, res) =>
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
);
router.use('/source', linker);
router.use('/data', loader);
router.use('/search', geter);
// router.use('/header')

router.use(notImplemented);
router.use(errorHandler);
module.exports = router;
