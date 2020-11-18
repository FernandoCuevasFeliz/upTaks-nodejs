const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// importing routes
const routes = require('./routes/index.routes');
const { dirname } = require('path');

const app = express();

// config
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// static files
app.use(express.static(__dirname + '/../public'));

// views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// routes
app.use('/', routes);

// start app
app.listen(4000, () => {
  console.log('Server running on port', app.get('port'));
});
