const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Vary response based on authenticated user
  res.status(200).json({
    name: { first: 'Alex', last: 'Lapinski' },
    email: 'contact@alexlapinski.name',
    id: 1,
  })
});

module.exports = router;
