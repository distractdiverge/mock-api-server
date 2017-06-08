const express = require('express');
const router = express.Router();

router.use('/colors', require('./colors'));
router.use('/user', require('./user'));

router.get('/', (req, res) => {
  res.status(200).json({
    hello: 'World!'
  });
});

module.exports = router;
