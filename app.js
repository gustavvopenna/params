//imports
const express = require('express')
const hbs     = require('hbs')
const bodyParser = require('body-parser')

//defs
const app     = express()
 
//middlewares
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(myFakeMiddleware)

function myFakeMiddleware(req, res, next) {
    console.log("this was called")
    req.bodyFake
    next();
}

//routes
app.use('/', require('./routes'))

//listen
app.listen(3000, () => console.log('App listening on port 3000!'))