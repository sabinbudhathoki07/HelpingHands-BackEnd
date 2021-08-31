const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

router.post('/admin/signup',
 (req, res) => {
	 const errors = validationResult(req);

	 if(!errors.isEmpty()){
		 res.send(errors.array());
	 }
	 else{
		const adminFirstname = req.body.adminFirstname;
		const adminLastname = req.body.adminLastname;
		const adminPassword = req.body.adminPassword;
		const adminEmailAddress = req.body.adminEmailAddress;
		const adminContactNumber = req.body.adminContactNumber;

		bcrypt.hash(adminPassword , 10 , function(err, hash){
			 const me = new Admin({adminFirstname:adminFirstname, adminLastname:adminLastname , adminEmailAddress:adminEmailAddress , adminContactNumber:adminContactNumber, adminPassword:hash});
				 me.save()
				 .then(function(){
				 res.status(201).json({
					 success:true,
					 message:"Admin Added"
				 })
				 console.log(me)
				 console.log("Registered !!");
			 }).catch(function(error){
				 res.status(500).json({
					message:"Registred Failed"
				 })
				 console.log("Registered Failed")
			 })
			 
		 })
	 }
});

//login
router.post('/admin/login',[
	check('adminEmailAddress',"Email must be entered").not().isEmpty(),
	check('adminPassword',"Password must be entered").not().isEmpty(),
	
],function(req,res){
	const adminEmailAddress = req.body.adminEmailAddress;
	const adminPassword = req.body.adminPassword;
    console.log(adminEmailAddress,adminPassword)

	Admin.findOne({adminEmailAddress: adminEmailAddress})
	.then(function(adminModel){

		if(adminModel==null){
			return res.status(403).json({message : "Invalid Credentials!! Null"})
		}

		//res.send("Login Successful")
		bcrypt.compare(adminPassword,adminModel.adminPassword,function(err,result){

			if (result===false){
				return	res.status(403).json({
					message :"Invalid Credentials!! Result False"})
			}
			//res.send("Authenticated")

			//adminEmailAddress and adminPassword valid
			const token = jwt.sign({adminId:adminModel._id},'secretkey');
         
			console.log("Token : " + token)
			res.status(200).json({
				success:true,
				token: token,
                id:adminModel._id
			})
			console.log("Login Successfully")
		})
	})
	.catch()
})


module.exports = router;