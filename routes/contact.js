const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const {check, validationResult} = require('express-validator');

// Insert
router.post('/user/message/insert',
(req, res) => {
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		res.send(errors.array());
	}
	else{
		const userEmail=req.body.userEmail;
        const userFirstName = req.body.userFirstName;
        const userLastName = req.body.userLastName;
		const userMessage = req.body.userMessage;
        const userPhoneNumber = req.body.userPhoneNumber;
        
        var messageDetails = new Contact({
            userEmail:userEmail,
            userFirstName:userFirstName,
            userLastName:userLastName,
            userMessage:userMessage,
            userPhoneNumber: userPhoneNumber
        });
        messageDetails.save()
        .then(function(data){
            //Success Insert
            res.status(200).json({success:true,data:data,message: "Message Sent Successfully"});
        })
        .catch(function(err){
            // Internal Server Error
            res.status(500).json({message: "Message Sent Failed, Please Try Again"})
        });
        console.log(messageDetails);
        console.log("Message Sent Successfully")
	}
});

router.get('/contact/display',(req,res) => {
	Contact.find().then(function(contactDetails){
		res.send(contactDetails);
	})
});

router.delete('/contact/delete/:id', function(req,res){
	const id = req.params.id;
	Contact.deleteOne({_id: id}).then(function(){
		res.status(200).json({success:true})
	})
})

module.exports = router;
