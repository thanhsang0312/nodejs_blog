const path = require('path');
const express = require('express'); // require: import thư viện
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express(); // function
const port = 3000; //định nghĩa cổng run

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => { //get: định nghĩa route, tuyến đường
    res.render('home');
})

//127.0.0.1 -> local host

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})