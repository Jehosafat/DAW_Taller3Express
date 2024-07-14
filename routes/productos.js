var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Producto = require('../models').producto;


router.get('/findAll/json',
    function(req, res, next) {
        Producto.findAll({
            attributes: { exclude: ["updatedAt"] },
        }).then(productos => {
            res.json(productos);
        }).catch(error => res.status(400).send(error))
    }
);

router.get('/findAll/view', function(req, res, next) {
    Producto.findAll({
        attributes: { exclude: ["updatedAt"] }
    }).then(productos => {
        res.render('productos', { title: 'Productos', arrProductos: productos });
    })
.catch(error => res.status(400).send(error))
});