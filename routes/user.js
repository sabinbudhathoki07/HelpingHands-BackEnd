const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const user = require("../models/user");
const jwt = require("jsonwebtoken");
const userconfig = require("../config/user.config");
const nodemailer = require("../config/nodemailer.config");

router.post("/user/register", function (req, res) {
	const token = jwt.sign({ userEmailAddress: req.body.userEmailAddress }, userconfig.secret);
	var userData = new user({
	  userFullName: req.body.userFullName,
	  userContactNumber: req.body.userContactNumber,
	  userEmailAddress: req.body.userEmailAddress,
	  userPassword: req.body.userPassword,
	  ConfirmationCode: token,
	});
	//for encrypting the password
	bcrypt.genSalt(10, (err, salt) => {
	  bcrypt.hash(userData.userPassword, salt, (err, hash) => {
		if (err) throw err;
		userData.userPassword = hash;
		userData.save((err) => {
		  if (err) {
			res.status(500).send({ message: err });
			return;
		  }
		  res.send({
			message: "user was registered successfully! Please check your email",
		  });
  
		  nodemailer.sendConfirmationEmail(
			userData.userFullName,
			userData.userEmailAddress,
			userData.ConfirmationCode
		  );
		});
	  });
	});
  });
  
  router.post("/user/login", (req, res) => {
	const Email = req.body.Email;
	const Password = req.body.Password;
  
	user.findOne({ Email: Email }).then(function (userData) {
	  if (userData === null) {
		//killing the code not giving further access
		return res
		  .status(403)
		  .json({ success: false, message: "Invalid Credentials" });
	  }
	  bcrypt.compare(Password, userData.Password, function (err, result) {
		if (result === false) {
		  return res
			.status(201)
			.json({ success: false, message: "Invalid Credentials" });
		}
		//generating token
		const token = jwt.sign({ userId: userData._id }, "secretkey");
		res.status(200).json({
		  success: true,
		  message: "Logged In Successfully",
		  token: token,
		});
	  });
	});
  });
  
  router.put("/user/confirm/:confirmationcode", (req, res) => {
	user
	  .findOne({
		ConfirmationCode: req.params.confirmationcode,
	  })
	  .then(function (data) {
		if (data.Status === "Verified") {
		  return res.status(200).send({ message: "Already Verified" });
		} else if (!data) {
		  return res.status(404).send({ message: "user Not Found" });
		} else if (data) {
		  user
			.updateOne(
			  { ConfirmationCode: req.params.confirmationcode },
			  { Status: "Verified" }
			)
			.then(function () {
			  const message = "Account Verified";
			  res.status(201).json({ success: true, message: message });
			  console.log(message);
			})
			.catch(function (err) {
			  res.status(500).json({ success: false, message: err });
			});
		}
	  })
	  .catch(function (e) {
		res.status(500).json({ success: false, message: e });
	  });
  });
  
  module.exports = router;



// // user Register
// router.post('/user/register',function(req,res){
// 	const errors = validationResult(req);

// 	if(!errors.isEmpty()){
// 		res.send(errors.array());
// 	}
// 	else{
// 		const userFullName=req.body.userFullName;
//         const userContactNumber = req.body.userContactNumber;
//         const userEmailAddress = req.body.userEmailAddress;
// 		const userPassword = req.body.userPassword;
//         bcrypt.hash(userPassword,10,function(error,hash){
// 			var userDetails = new Contact({
// 				userFullName:userFullName,
// 				userContactNumber:userContactNumber,
// 				userEmailAddress:userEmailAddress,
// 				userPassword:hash
// 			});
// 			userDetails.save()
// 			.then(function(data){
// 				//Success Insert
// 				res.status(200).json({success:true,data:data,message: "Message Sent Successfully"});
// 			})
// 			.catch(function(err){
// 				// Internal Server Error
// 				res.status(500).json({message: "Message Sent Failed, Please Try Again"})
// 			});
// 			console.log(userDetails);
// 			console.log("Message Sent Successfully")
// 		})
// 	}
// })


// // user Login
// router.post('/user/login',function(req,res){
	
// 	console.log("Entered Login Route");

// 	const userEmailAddress = req.body.userEmailAddress;
// 	const userPassword = req.body.userPassword;

// 	console.log("\nEmailAddress :", userEmailAddress);
// 	console.log("userPassword :", userPassword);
    
// 	user.findOne({userEmailAddress: userEmailAddress})
// 	.then(function(userModel){

// 		if(userModel==null){
// 			return res.status(403).json({
// 				success:false,
// 				message : "Invalid Credentials!! Null"})
// 		}

// 		//res.send("Login Successful")
// 		bcrypt.compare(userPassword,userModel.userPassword,function(err,result){

// 			if (result===false){
// 				return	res.status(403).json({
// 					success:false,
// 					message :"Invalid Credentials!! Result False"})
// 			}

// 			console.log("\nValid Login, Generating Token");

// 			// If Valid Login then Token is Generated
// 			const token =jsonWebToken.sign({userId:userModel._id},'secretkey');
// 			console.log("\nToken :", token)
// 			res.status(200).json({
// 				success: true,
// 				token: token,
// 				id:userModel._id,
// 				userEmailAddress:userEmailAddress
// 			})
// 			console.log("Id",userModel._id)
// 			console.log("\n",userEmailAddress,"is Logged-in Successfully.")
// 		})
// 	})
// 	.catch()
// })


router.get("/account/:id",function(req,res){    
	console.log("Account")
    const id = req.params.id;
	console.log(id)
    user.findOne({_id:id})
    .then(function(result){
        res.status(200).json(result);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});

router.get('/user/display',(req,res) => {
	user.find().then(function(userDetails){
		res.send(userDetails);
	})
});



router.put('/user/update-profile',(req,res) => {
	const id = req.body.id;
	const userFullName = req.body.userFullName 
	const userContactNumber = req.body.userContactNumber 

    user.updateOne({_id:id},{
		userFullName : userFullName,
		userContactNumber : userContactNumber
	})
	.then(function(result){
		res.status(200).json(result);
	})
	.catch(function(err){
		res.status(500).json({message : err})
	})
});

router.put('/user/load-balance',(req,res) => {
	const id = req.body.id;
	const userBalance = req.body.userBalance 
	const userNewBalance = req.body.userNewBalance 
	const Balance = parseInt(userBalance) + parseInt(userNewBalance)

	console.log("Load-Balance of Id : " + id)
	console.log("Load-Balance Amount : " + req.body.userNewBalance)
	console.log("Your New Balance Amount: " + Balance)

    user.updateOne({_id:id},{
		userBalance : Balance
	})
	.then(function(result){
		res.status(200).json(result);
	})
	.catch(function(err){
		res.status(500).json({message : err})
	})
});

router.get('/my-account/display/:id',(req,res) => {
    const id = req.params.id;
	console.log(id)
    user.findOne({_id:id})
    .then(function(result){
        res.status(200).json(result);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});

module.exports = router;