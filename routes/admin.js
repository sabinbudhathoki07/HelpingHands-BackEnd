const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const authentication = require('../middleware/authentication');

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
			const adminToken = jwt.sign({adminId:adminModel._id},'secretkey');
         
			console.log("Token : " + adminToken)
			res.status(200).json({
				success:true,
				adminToken: adminToken,
                id:adminModel._id
			})
			console.log("Admin Login Successfully")
		})
	})
	.catch()
})

router.get('/admin/display',(req,res) => {
	Admin.find().then(function(adminDetails){
		res.send(adminDetails);
	})
});

router.get("/admin/display/:id",function(req,res){    
    const id = req.params.id;
    Admin.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});

router.put('/admin/update-admin',authentication.verifyAdmin,(req,res) => {
	const id = req.body.id;
	const adminFirstname = req.body.adminFirstname 
	const adminLastname = req.body.adminLastname 
	const adminContactNumber = req.body.adminContactNumber

    Admin.updateOne({_id:id},{
		adminFirstname : adminFirstname,
		adminLastname : adminLastname,
		adminContactNumber : adminContactNumber
	})
	.then(function(result){
		res.status(200).json(result);
	})
	.catch(function(err){
		res.status(500).json({message : err})
	})
});

router.delete('/admin/delete/:id',authentication.verifyAdmin, function(req,res){
	const id = req.params.id;
	Admin.deleteOne({_id: id}).then(function(){
		res.status(200).json({success:true})
	})
})


module.exports = router;