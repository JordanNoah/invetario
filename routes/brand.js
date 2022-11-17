var express = require('express')
var db = require('../models')
var router = express.Router()
var uuid = require('uuid')
var multer = require('multer')
var upload = multer({ dest:"./public/images/brand/" })

router.post('/save', upload.single() ,async (req,res) => {
    console.log(req.body.file);
    res.json({message:"Successfully update"})
})

module.exports = router