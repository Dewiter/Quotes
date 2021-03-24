const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const path = require('path');

//Congfig
dotenv.config({ path : './config/config.env' })

const app = express()
const PORT = process.env.PORT || 5000;


// HandleBars
app.engine('.hbs', exphbs({defaultLayout: 'index', extname: 'hbs'}));
app.set('view engine', '.hbs');

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', require('./Routes/index'))

// Ports
app.listen (
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)