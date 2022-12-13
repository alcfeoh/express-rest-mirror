const express = require('express');
const app = express();
var cors = require('cors');
const port = 80;
const path = require('path');

app.use(cors());

app.post('/mirror', (req, res) => {
  res.send(req.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
