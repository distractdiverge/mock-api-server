const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    hello: 'World!'
  });
});

app.get('/user', (req, res) => {
  // TODO: Vary response based on authenticated user
  res.status(200).json({
    name: { first: 'Alex', last: 'Lapinski' },
    email: 'contact@alexlapinski.name',
    id: 1,
  })
});

app.get('/colors', (req, res) => {
  res.status(200).json([
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
