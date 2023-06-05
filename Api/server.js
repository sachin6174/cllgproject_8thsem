const express = require('express');
const https = require('https');
const app = express();
const port = 3000;
const { ApiData } = require('./constants.js');

app.get('/config/api', (req, res) => {
  res.send(ApiData)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
