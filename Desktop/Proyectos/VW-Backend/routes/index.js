const express = require('express');
const router = express.Router();

const { Client } = require('../models/client');



//GET all clients...

router.get('/api/clients', ( req, res ) => {
    try {
        Client.find({}, ( err, data ) => {
            if(!err) {
                res.status(200).json({
                    success: true,
                    data: data
                });
            }
        })     
    } catch( err ){
        res.status(500).json({
            success: false,
            message: 'Failed operation.',
            error: err
        })

    }
})


//GET one client...
router.get('/api/clients/:id', ( req, res ) => {
    try {
        Client.findById( req.params.id, ( err, data ) => {
            if(!err) {
                if(!data) res.send('Any match with the id given.')
                res.status(200).json({
                    success: true,
                    data: data
                });
            }
        })

    } catch( err ) {
        res.status(500).json({
            success: false,
            message: 'Failed operation.',
            error: err
        })
    }
})


//POST one client...
router.post('/api/clients/add', ( req, res ) => {
    try {
        const client = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            currentMoney: req.body.currentMoney
        })
        client.save((err, data) => {
            if(!err) {
                res.status(200).json({
                    success: true,
                    data: client
                });
            }
        })
    } catch( err ) {
        res.status(500).json({
            success: false,
            message: 'Failed operation.',
            error: err
        })
    }
})

//UPDATE one client...
router.put('/api/clients/:id', (req, res) => {

    try {
        const client = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            currentMoney: req.body.currentMoney
        };
        Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
            if(!err) {
                if(!err) {
                    res.status(200).json({
                        success: true,
                        data: client
                    });
                }
            } 
        });
        
    } catch( err ) {
        res.status(500).json({
            success: false,
            message: 'Failed operation.',
            error: err
        })
    }

});

//DELETE one client...
router.delete('/api/clients/:id', (req, res) => {
    try {
        Client.findByIdAndRemove(req.params.id, (err, data) => {
            if(!err) {
                res.status(200).json({code: 200, message: 'Client deleted', deletedEmployee: data})
            } 
        });

    } catch( err ) {
        res.status(500).json({
            success: false,
            message: 'Failed operation.',
            error: err
        })
    }
});


module.exports = router;