
const express =require('express');
const router = express.Router();
const keys=require('../../config/keys');




const Category=require('../../models/categorylist');

router.get('/test',(req,res) => res.json({msg:'works'}));


//display the category list of service
//GET api/service/categorylist
//acess public
router.get('/getcatergorylist', (req, res) => {
    Category.find()
        .sort({ "categoryname": 1 })
        .then(category => res.send(category ))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  });


  module.exports = router;
