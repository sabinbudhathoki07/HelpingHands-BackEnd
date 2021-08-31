const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaign');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jsonWebToken = require('jsonwebtoken');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

//Campaign Post
router.post('/campaign/insert',upload.single("images"),async (req, res) => {
	try {
		console.log("Campaign")
	  // Upload image to cloudinary
	  const result = await cloudinary.uploader.upload(req.file.path);

		let CampaignDetails = new Campaign({
			campaignImage: result.secure_url,
			campaignName: req.body.campaignName,
			campaignShortDescription: req.body.campaignShortDescription,
			campaignGoal: req.body.campaignGoal,
			campaignDays: req.body.campaignDays,
			campaignCategories: req.body.campaignCategories,
			campaignTags: req.body.campaignTags,
			campaignFullDescription: req.body.campaignFullDescription,
			campaignPostedBy : req.body.campaignPostedBy,
			
		});

		await CampaignDetails.save();
			res.json(CampaignDetails);
		} catch (err) {
		console.log(err);
		}
});

// Campaign All Display
router.get('/campaign/display',(req,res) => {
	Campaign.find().then(function(Post){
		res.send(Post);
	})
});

// Campaign Limit 3
router.get('/campaign/display/limit=3',(req,res) => {
	Campaign.find().limit(3)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Latest
router.get('/campaign/latest/limit=2',(req,res) => {
	var mysort = { campaignPostDate: -1 };
	Campaign.find().sort(mysort).limit(2)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Latest
router.get('/campaign/limit=3',(req,res) => {
	var mysort = { campaignPostDate: -1 };
	Campaign.find().sort(mysort).limit(3)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Latest
router.get('/campaign/limit=4',(req,res) => {
	var mysort = { campaignPostDate: -1 };
	Campaign.find().sort(mysort).limit(4)
	.then(function(Post){
		res.send(Post);
	})
});

// My BLog Display
router.get("/my-campaign/display/:id",function(req,res){    
    const id = req.params.id;
	console.log(id)
	var mycampaign = { campaignPostedBy: id };
	Campaign.find(mycampaign)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Education
router.get('/campaign/display/education',(req,res) => {
	var education = { campaignCategories: "Education" };
	Campaign.find(education)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Education
router.get('/campaign/display/environment',(req,res) => {
	var environment = { campaignCategories: "Environment" };
	Campaign.find(environment)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Food
router.get('/campaign/display/food',(req,res) => {
	var environment = { campaignCategories: "Food" };
	Campaign.find(environment)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Funeral Expenses
router.get('/campaign/display/funeral-expenses',(req,res) => {
	var medical = { campaignCategories: "Funeral Expenses" };
	Campaign.find(medical)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Medical Expenses
router.get('/campaign/display/medical-expenses',(req,res) => {
	var mysort = { campaignPostDate: -1 };
	var medical = { campaignCategories: "Medical Expenses" };
	Campaign.find(medical).sort(mysort)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Life Essential Necessities
router.get('/campaign/display/life-essential-necessities',(req,res) => {
	var medical = { campaignCategories: "Life Essential Necessities" };
	Campaign.find(medical)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Category : Others
router.get('/campaign/display/other',(req,res) => {
	var medical = { campaignCategories: "Others" };
	Campaign.find(medical)
	.then(function(Post){
		res.send(Post);
	})
});

// Campaign Display Single
router.get("/campaign/display/:id",function(req,res){    
    const id = req.params.id;
    Campaign.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});



module.exports = router;