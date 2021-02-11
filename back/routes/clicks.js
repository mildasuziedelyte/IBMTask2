const express = require ('express');
const router = express.Router();

const Click = require('../models/Click');

    //Submiting new user click on video

router.post('/', async (req,res)=>{

    const click = new Click({
        videoTitle: req.body.videoTitle,
        videoChanel:req.body.videoChanel,
        videoId:req.body.videoId
        
    });
 
    try {
        const savedClick = await click.save()
        res.json({
            message:"succes"
        });
    }
    catch (err) {
     res.json({
         message:err
     })
    }
 }); 

module.exports = router;


