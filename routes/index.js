const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/users/:username', (req, res) => {
    res.send(req.params.username)
})

router.get('/books/:bookId', (req, res)=>  {
    res.send(req.params)
})

router.get('/users/:username/books/:bookId', (req, res)=>  {
    res.send(req.params)
})

router.get('/search', (req, res, next) => {
    res.send(req.query)
})

router.get('/get-user-info', (req, res) => {
    res.render('user-info-form');
  });

router.get('/display-user-info', (req,res) => {
    const {name, age, superhero} = req.query
    res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
    `)
});

router.get('/login', (req, res) => {
    res.render('login')
}); 

router.post('/login', (req, res) => {
    res.send('You are logged')
})

router.get('/login-2', (req, res) => {
    res.render('login-2')
}); 

router.post('/login-2', (req, res) => {
    // NO HACER ESTO NEVER EN LA VIDA
    const {email , password}  = req.body 
    if(email === "ironhack@gmail.com" && password === "taquitos"){
        res.send(`Jaijeloooouuuu!!!! Email: ${email}, Password: ${password}`);
    } else {
        res.send(`No taquitos for yu`);
    }});

router.get('/test', (req, res) => {
        res.send("We made it to test!");
      });
    

module.exports = router

