const dotenv=require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});

require('./db/conne');

app.use(express.json());
//const User=require('./user/users');

app.use(express.json());
//we link router file to make route easily
app.use(require('./router/auth'));

const PORT=process.env.PORT;
 

const middleware = (req, res, next) => {
    console.log(`middleware`);
    next(); 
}
 
app.get('/', (req, res) => {
    res.send(`hii this is home page from app,js`);
});
//router file data show inplace of app.js it work on top to bottom because we call it router

app.get('/about', middleware, (req, res) => {
    res.send(`about`);
});

app.get('/contact', (req, res) => {
    res.send(`contact`);
});

app.get('/signin', (req, res) => {
    res.send(`login`);
});

app.get('/signup', (req, res) => {
    res.send(`register`);
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
 