const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');
const { engine } = require("express-handlebars");
const session = require('express-session');
const cookieParser = require('cookie-parser');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
    secret: 'qduy17',
    resave: true,
    saveUninitialized: true
  }));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.use(morgan('combined'));

app.engine("hbs", engine({
    extname:'.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));


route(app);


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})