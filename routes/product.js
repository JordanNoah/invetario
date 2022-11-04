var express = require('express')
var db = require('../models')
var route = express.Router()
var uuid = require('uuid')
route.post(`/save`, async (req, res) => {
    var [product,create]=await db.product.findOrCreate({
        where: { name: req.body.name },
  defaults: {
    name: req.body.name , uuid:uuid.v4()
  }
    })
    console.log(create)
    res.send(product)
})


route.get(`/all`, async (req, res) => {
    var product = await db.product.findAll()
    res.send(product)
})

module.exports = route