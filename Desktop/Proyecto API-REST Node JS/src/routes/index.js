const { Router } = require('express'); // me permite crear rutas
const router = Router();


//routes
router.get('/test', (req, res)=>{
    const data={
        'name':'Cristian',
        'country': 'Ukraine'
    }
    res.json(data);
});

module.exports = router;