const express = require('express');
const router = express.Router();
const Donation = require('../models/donation');
const bcrypt = require('bcryptjs');
const User = require("../models/user");
const {check, validationResult} = require('express-validator');
const jsonWebToken = require('jsonwebtoken');

router.post('/donate',
(req, res) => {
	const errors = validationResult(req);
    console.log("Donate")

	if(!errors.isEmpty()){
		res.send(errors.array());
	}
	else{
		const campaignId=req.body.campaignId;
		const campaignName=req.body.campaignName;
		const donorFullName=req.body.donorFullName;
        const donorEmailAddress = req.body.donorEmailAddress;
        const donorContactNumber = req.body.donorContactNumber;
		const donorAddress1 = req.body.donorAddress1;
        const donorAddress2 = req.body.donorAddress2;
        const donorCity = req.body.donorCity;
        const donorPostalCode = req.body.donorPostalCode;
        const donorDonated = req.body.donorDonated;
        const donatedBy = req.body.donatedBy;
        const userBalance = req.body.userBalance 
        
        var donate = new Donation({
            campaignId:campaignId,
            campaignName:campaignName,
            donorFullName:donorFullName,
            donorEmailAddress:donorEmailAddress,
            donorContactNumber:donorContactNumber,
            donorAddress1:donorAddress1,
            donorAddress2: donorAddress2,
            donatedBy: donatedBy,
            donorCity: donorCity,
            donorPostalCode: donorPostalCode,
            donorDonated: donorDonated,
        });
        donate.save()
        .then(function(data){
            //Success Insert
            res.status(200).json({success:true,data:data,message: "Donated Successfully"});
        })
        .catch(function(err){
            // Internal Server Error
            res.status(500).json({message: "Donation failed, Please Try Again"})
        });
        console.log(donate);
        console.log("Donated Successfully")
	}
});

router.get('/donation/display',(req,res) => {
	Donation.find().then(function(donationDetails){
		res.send(donationDetails);
	})
});

router.get("/my-donation/display/:id",function(req,res){    
    const id = req.params.id;
	console.log(id)
	var mydonation = { donatedBy: id };
	Donation.find(mydonation)
	.then(function(Post){
		res.send(Post);
	})
});


module.exports = router;