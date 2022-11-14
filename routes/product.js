var express = require('express')
var db = require('../models')
var route = express.Router()
var uuid = require('uuid')
route.post(`/save`, async (req, res) => {
  var [product, create] = await db.product.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      name: req.body.name,
      uuid: uuid.v4()
    }
  })
  console.log(create)
  res.send(product)
})


route.get(`/all`, async (req, res) => {
  var product = await db.product.findAll()
  res.send(product)
})

route.get(`/uuid/:uuid`, async (req, res) => {
  console.log(req.params)
  var uuid = await db.product.findOne({
    where: {
      uuid: req.params.uuid
    }
  })
  res.send(uuid)
})

route.put(`/uuid/:uuid`, async (req, res) => {
  var response = {}
  var uuid = await db.product.update(
    {
      name: req.body.name
    },
    {
    where: {
      uuid: req.params.uuid
    }
  } )
  if(uuid){
    response.update=true
  }else{
    response.update=false
  }
  res.send(response)

})

route.delete(`/uuid/:uuid`, async (req,res) => {
  var response= {}
  var uuid = await db.product.destroy({
    where: {uuid:req.params.uuid}}
  )
  
 if(uuid){
   response.delete=true
 }else{
  response.delete=false
 }
 res.send(response)
})

/**
 * to do get uuid
 * ""    put uuid
 *       delete uuid
 * 
 */

module.exports = route