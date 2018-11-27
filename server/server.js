require('newrelic');
const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.get(express.static(path.resolve(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:campaignId', (req, res) => { // handle requests for a given campaign's stats
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
