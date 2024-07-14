var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Cliente = require('../models').cliente;


router.get('/findAll/json',
    function(req, res, next) {
        Cliente.findAll({
            attributes: { exclude: ["updatedAt"] },
        }).then(clientes => {
            res.json(clientes);
        }).catch(error => res.status(400).send(error))
    }
);

router.get('/findAll/view', function(req, res, next) {
    Cliente.findAll({
        attributes: { exclude: ["updatedAt"] }
    }).then(clientes => {
        res.render('clientes', { title: 'Clientes', arrClientes: clientes });
    })
.catch(error => res.status(400).send(error))
});