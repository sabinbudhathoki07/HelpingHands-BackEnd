const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jsonWebToken = require('jsonwebtoken');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

//Event Register
router.post('/event/insert',upload.single("images"),async (req, res) => {
	try {
	  // Upload image to cloudinary
	  const result = await cloudinary.uploader.upload(req.file.path);
	  
		let EventDetails = new Event({
			eventImage: result.secure_url,
			eventName: req.body.eventName,
			eventShortDescription: req.body.eventShortDescription,
			eventAttendees: req.body.eventAttendees,
			eventDate: req.body.eventDate,
			eventMonth: req.body.eventMonth,
			eventYear:  req.body.eventYear,
			eventCategories: req.body.eventCategories,
			eventLocation: req.body.eventLocation,
			eventFullDescription: req.body.eventFullDescription,
			eventPostedBy : req.body.eventPostedBy,
			
		});

		await EventDetails.save();
		res.json(EventDetails);
		} catch (err) {
		console.log(err);
		}
});

router.get('/event/display',(req,res) => {
	Event.find()
	.then(function(Post){
		res.send(Post);
	})
});

router.get('/event/display/limit=3',(req,res) => {
	Event.find().limit(3)
	.then(function(Post){
		res.send(Post);
	})
});

router.get("/my-event/display/:id",function(req,res){    
    const id = req.params.id;
	console.log(id)
	var myevent = { eventPostedBy: id };
	Event.find(myevent)
	.then(function(Post){
		res.send(Post);
	})
});

router.get("/event/display/:id",function(req,res){    
    const id = req.params.id;
    Event.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});

// Event Category Wise
// Event Category : Entertainment
router.get('/event/entertainment',(req,res) => {
	var entertainment = { eventCategories: "Entertainment" };
	Event.find(entertainment)
	.then(function(Post){
		res.send(Post);
	})
});

// Event Category : Social
router.get('/event/social',(req,res) => {
	var social = { eventCategories: "Social" };
	Event.find(social)
	.then(function(Post){
		res.send(Post);
	})
});

// Event Category : Sports
router.get('/event/sports',(req,res) => {
	var sports = { eventCategories: "Sports" };
	Event.find(sports)
	.then(function(Post){
		res.send(Post);
	})
});


// Event Category : Religious
router.get('/event/religious',(req,res) => {
	var religious = { eventCategories: "Religious" };
	Event.find(religious)
	.then(function(Post){
		res.send(Post);
	})
});

// Event Category : Educational
router.get('/event/educational',(req,res) => {
	var educational = { eventCategories: "Educational" };
	Event.find(educational)
	.then(function(Post){
		res.send(Post);
	})
});

// Event Category : Political
router.get('/event/political',(req,res) => {
	var political = { eventCategories: "Political" };
	Event.find(political)
	.then(function(Post){
		res.send(Post);
	})
});

// Event Category : Charitable
router.get('/event/charitable',(req,res) => {
	var charitable = { eventCategories: "Charitable" };
	Event.find(charitable)
	.then(function(Post){
		res.send(Post);
	})
});

// Event Category : Others
router.get('/event/others',(req,res) => {
	var others = { eventCategories: "Others" };
	Event.find(others)
	.then(function(Post){
		res.send(Post);
	})
});

router.put('/event/update-event',(req,res) => {
	const id = req.body.id;
	const eventName = req.body.eventName 
	const eventShortDescription = req.body.eventShortDescription 
	const eventAttendees = req.body.eventAttendees
	const eventDate = req.body.eventDate
	const eventMonth = req.body.eventMonth
	const eventYear = req.body.eventYear
	const eventCategories = req.body.eventCategories
	const eventLocation = req.body.eventLocation
	const eventFullDescription = req.body.eventFullDescription

    Event.updateOne({_id:id},{
		eventName : eventName,
		eventShortDescription : eventShortDescription,
		eventAttendees : eventAttendees,
		eventDate : eventDate,
		eventMonth : eventMonth,
		eventYear : eventYear,
		eventCategories : eventCategories,
		eventLocation : eventLocation,
		eventFullDescription : eventFullDescription,
	})
	.then(function(result){
		res.status(200).json(result);
	})
	.catch(function(err){
		res.status(500).json({message : err})
	})
});

router.delete('/event/delete/:id', function(req,res){
	const id = req.params.id;
	Event.deleteOne({_id: id}).then(function(){
		res.status(200).json({success:true})
	})
})


module.exports = router;