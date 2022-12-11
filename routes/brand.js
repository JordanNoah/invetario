var express = require('express')
var db = require('../models')
var router = express.Router()
var uuid = require('uuid')
var multer = require('multer')
multer({dest:"./public/images/brands/"})

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/images/brands/')
    },
    filename: (req,file,cb) => {
        cb(null,`${uuid.v4()}.${file.originalname.split(".")[1]}`)
    }
})

router.post('/save',async (req,res) => {

    var uploadImage = await multer({storage:storage}).single('file');

    console.log(req.body);

    var image;

    await uploadImage(req,res, async (err) => {
        console.error(err);
        if (err == undefined) {
            image = req.file
        }else {
            image = null
        }

        const [brand, created] = await db.brand.findOrCreate({
            where:{
                name:req.body.nameBrand
            },
            defaults:{
                uuid:image ? image.filename.split(".")[0] : uuid.v4(),
                name:req.body.nameBrand,
                image:image ? image.path : 'public/images/brands/default.jpg'
            }
        })
        res.send(brand)
    })
})


router.get(`/all` , async (req,res) => {
    var brand = await db.brand.findAll()
    res.send(brand)
} )

router.put(`/uuid/:uuid` , async (req,res) =>{
var response = {}
var uuid= await db.brand.update(
    {
        name:req.body.name
    },
    {
        where: {
            uuid: req.params.uuid
        }
    })
    if (uuid){
        response.update=true
    }else{
        response.update=false
    }
   res.send(response)
} ) 



module.exports = router