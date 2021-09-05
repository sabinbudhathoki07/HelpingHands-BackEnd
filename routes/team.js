const express = require('express');
const router = express.Router();
const TeamMember = require('../models/team');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");


router.post("/team/insert", upload.single("images"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new user
    let teamember = new TeamMember({
        teamemberName : req.body.teamemberName,
		    teamemberDescription : req.body.teamemberDescription,
        teamemberPosition : req.body.teamemberPosition,
        teamemberImage: result.secure_url
    });
    // Save user
    await teamember.save();
    res.json(teamember);
  } catch (err) {
    console.log(err);
  }
});



router.get('/team/display',(req,res) => {
	TeamMember.find().then(function(teamemberPositions){
		res.send(teamemberPositions);
	})
});

router.get('/team/latest/limit=2',(req,res) => {
	var mysort = { teamemberRegisteredDate: -1 };
	TeamMember.find().sort(mysort).limit(2)
	.then(function(teamemberPositions){
		res.send(teamemberPositions);
	})
});

router.get('/team/latest/limit=3',(req,res) => {
	var mysort = { teamemberRegisteredDate: -1 };
	TeamMember.find().sort(mysort).limit(3)
	.then(function(teamemberPositions){
		res.send(teamemberPositions);
	})
});

// User Display Single
router.get("/team/display/:id",function(req,res){    
    const id = req.params.id;
    TeamMember.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});

router.delete('/team/delete/:id', function(req,res){
	const id = req.params.id;
	TeamMember.deleteOne({_id: id}).then(function(){
		res.status(200).json({success:true})
	})
})

router.put('/team/update-teamember',(req,res) => {
    const id = req.body.id;
    const teamemberName = req.body.teamemberName 
    const teamemberDescription = req.body.teamemberDescription 
    const teamemberPosition = req.body.teamemberPosition

    TeamMember.updateOne({_id:id},{
      teamemberName : teamemberName,
      teamemberDescription : teamemberDescription,
      teamemberPosition : teamemberPosition,
    })
    .then(function(result){
      res.status(200).json(result);
    })
    .catch(function(err){
      res.status(500).json({message : err})
    })
});


module.exports = router;