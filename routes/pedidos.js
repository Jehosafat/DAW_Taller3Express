var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Pedido = require('../models').pedido;
const Cliente = require('../models').cliente;


router.get('/findAll/json',
    function(req, res, next) {
        Pedido.findAll({
            include: [{
                model: Cliente,
                attributes: ['id', 'nombre', 'apellido'],
                as: 'cliente' // Alias para el modelo Cliente
            }],
            attributes: ['id', 'estado', 'fecha'] 
        }).then(pedidos => {
            res.json(pedidos);
        }).catch(error => res.status(400).send(error))
    }
);

router.get('/findAll/view', function(req, res, next) {
    Pedido.findAll({
        include: [{
            model: Cliente,
            attributes: ['id', 'nombre', 'apellido'],
            as: 'cliente' // Alias para el modelo Cliente
        }],
        attributes: ['id', 'estado', 'fecha'] 
    })
    .then(pedidos => {
    res.render('pedidos', { title: 'Pedidos', arrPedidos: pedidos });
    })
    .catch(error => res.status(400).send(error))
});