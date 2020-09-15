const router = require('express').Router();

router.use('/sampleRoute', require('./sampleRoute'));

router.use((req, res, next) => {
  const err = new Error('Not Found.');
  err.status=404;
  next(err)
})

module.exports = router
