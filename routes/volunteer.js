const express = require('express');
const router = express.Router();
const Volunteer = require('../models/volunteer');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jsonWebToken = require('jsonwebtoken');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

//Volunteer Register
router.post('/volunteer/register',upload.single("images"),async (req, res) => {
	try {
	  // Upload image to cloudinary
	  const result = await cloudinary.uploader.upload(req.file.path);

		let volunteerDetails = new Volunteer({
			volunteerImage: result.secure_url,
			volunteerFullName: req.body.volunteerFullName,
			volunteerEmailAddress: req.body.volunteerEmailAddress,
			volunteerDateOfBirth: req.body.volunteerDateOfBirth,
			volunteerGender: req.body.volunteerGender,
			volunteervolunteerNumber: req.body.volunteervolunteerNumber,
			volunteerAddress: req.body.volunteerAddress,
			volunteerPostalCode: req.body.volunteerPostalCode,
			volunteerNationality: req.body.volunteerNationality
		});
				
	    await volunteerDetails.save();
			res.json(volunteerDetails);
		} catch (err) {
		console.log(err);
		}
});

// Volunteer Display All
router.get('/volunteer/display',(req,res) => {
	Volunteer.find().then(function(volunteerDetails){
		res.send(volunteerDetails);
	})
});

router.get('/volunteer/count',(req,res) => {
	Volunteer.find().count()
	.then(function(volunteerDetails){
		res.send(volunteerDetails);
	})
});

// Volunteer Display Single
router.get("/volunteer/display/:id",function(req,res){    
    const id = req.params.id;
    Volunteer.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});

router.put('/volunteer/update-volunteer',(req,res) => {
    const id = req.body.id;
    const volunteerFullName = req.body.volunteerFullName 
    const volunteerEmailAddress = req.body.volunteerEmailAddress 
    const volunteerDateOfBirth = req.body.volunteerDateOfBirth
    const volunteerGender = req.body.volunteerGender
    const volunteerContactNumber = req.body.volunteerContactNumber
    const volunteerAddress = req.body.volunteerAddress
    const volunteerPostalCode = req.body.volunteerPostalCode
    const volunteerNationality = req.body.volunteerNationality

    Volunteer.updateOne({_id:id},{
      volunteerFullName : volunteerFullName,
      volunteerEmailAddress : volunteerEmailAddress,
      volunteerDateOfBirth : volunteerDateOfBirth,
      volunteerGender : volunteerGender,
      volunteerContactNumber : volunteerContactNumber,
      volunteerAddress : volunteerAddress,
      volunteerPostalCode : volunteerPostalCode,
      volunteerNationality : volunteerNationality
    })
    .then(function(result){
      res.status(200).json(result);
    })
    .catch(function(err){
      res.status(500).json({message : err})
    })
});

router.delete('/volunteer/delete/:id', function(req,res){
	const id = req.params.id;
	Volunteer.deleteOne({_id: id}).then(function(){
		res.status(200).json({success:true})
	})
})


module.exports = router;