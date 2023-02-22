const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/', router);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
