const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch'); // npm install fetch

router.get('/', async (req, res)=>{

    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    res.json(users);
});


module.exports = router;