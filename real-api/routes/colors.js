const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json([
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' }
  ]);
});

module.exports = router;
