require('dotenv').config({
  path: './variables.env',
});
const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes');
const errorHandler = require('./helpers/errorHandler');

const app = express();

require('./helpers/passport');

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.use(errorHandler.handler404);
app.use(errorHandler.handlerServerErrors);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
