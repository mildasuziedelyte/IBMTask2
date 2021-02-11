const express = require ('express');
const router = express.Router();

const Search = require('../models/Search');

router.get('/', async (req,res)=>{
    try {
        const searches = await Search.find();
        res.json(searches) 
    }
    catch (err) {
        res.json({message:err})
    }
})

    //Submiting new input


router.post('/', async (req,res)=>{

    const search = new Search({
        keyword: req.body.keyword,
        
    });
 
    try {
        const savedSearch = await search.save()
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


