const express = require('express');
const app = express();
var cors = require('cors');
const port = 80;

app.use(express.json());
app.use(cors());

app.post('/mirror', (req, res) => {
  console.log(req.body);
  res.end(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
