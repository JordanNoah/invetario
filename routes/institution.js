var express = require('express')
var db = require('../models')
var router = express.Router()
var uuid = require('uuid')
var multer = require('multer')


multer({dest:"./public/images/institutions/"})

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./public/images/institutions/')
    },
    filename:(req,file,cb) =>{
        cb(null,`${uuid.v4()}.${file.originalname.split(".")[1]}`)
    }
})


router.post('/save', async(req,res) =>{
    var uploadImage = await multer({storage:storage}).single('file')

    var image;
    await  uploadImage (req,res,async (err) => {
        if(err == undefined){
            image=req.file
        }else {
            image=null
        }

    const [institution,created] = await db.institution.findOrCreate({
        where:{
            name:req.body.nameInstitution
        },
        defaults:{
            uuid:image ? image.filename.split(".")[0] : uuid.v4(),
            name:req.body.nameInstitution,
            image:image ? image.path : 'public/images/institutions/default.png'
        }
    })
res.send(institution)
})
})

router.get(`/all`, async(req,res) =>{
    var institution = await db.institution.findAll()
    res.send(institution)
})

router.put(`/uuid/:uuid` , async (req,res) => {
    var response = {}
    var uuid = await db.institution.update(
        {
            name:req.body.name
        },
        {
            where: {
                uuid:req.params.uuid
            }
        })
        if(uuid){
            response.update=true
        }else {
            response.update=false
        }
        res.send(response)
})


module.exports=router