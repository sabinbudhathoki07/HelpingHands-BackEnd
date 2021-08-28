const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");


router.post("/blog/insert", upload.single("images"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new user
    let blog = new Blog({
        blogTitle :req.body.blogTitle,
		    blogDescription : req.body.blogDescription,
        blogDetail : req.body.blogDetail,
        blogTags : req.body.blogTags,
        blogPostedBy : req.body.blogPostedBy,
        blogImage: result.secure_url
    });
    // Save user
    await blog.save();
    res.json(blog);
  } catch (err) {
    console.log(err);
  }
});












// //Blog Register
// router.post('/blog/insert',blog.single('blogImage'),(req, res) => {
// 	console.log("Entered Blog Insert Route");
// 	const errors = validationResult(req);

// 	if(!errors.isEmpty()){
// 		var error = errors.array();
// 		return res.status(400).json(error);
// 	}
// 	else{
// 		if(req.file==undefined){
// 			console.log("\nInvalid Blog Picture Format");
//             return res.status(500).json("Invalid Blog Picture Image Format");
//         }
// 		const blogImage = req.file.filename;
// 		const blogTitle = req.body.blogTitle;
// 		const blogDescription = req.body.blogDescription;
// 		const blogDetail = req.body.blogDetail;
// 		const blogTags = req.body.blogTags;
// 		const blogPostedBy = req.body.blogPostedBy;

// 		var blogDetails = new Blog({
// 			blogImage: blogImage,
// 			blogTitle: blogTitle,
// 			blogDescription: blogDescription,
// 			blogDetail: blogDetail,
// 			blogTags: blogTags,
// 			blogPostedBy : blogPostedBy,
// 		});
				
// 	    blogDetails.save()
// 		.then(function(data){
// 			res.status(201).json({ 
// 				success: true, message : "Blog Added"
// 			})
// 			console.log("Blog Added");
// 			console.log(blogDetails);
// 		})
// 		.catch(function(error){
// 			res.status(500).json({
// 				message: "Blog Addition Failed"
// 			})
// 			console.log(error);
// 			console.log("Blog Addition Failed");
// 		});
// 	}
// });

router.get('/blog/display',(req,res) => {
	Blog.find().then(function(blogDetails){
		res.send(blogDetails);
	})
});

// My BLog Display
router.get("/my-blog/display/:id",function(req,res){    
    const id = req.params.id;
	console.log(id)
	var myblog = { blogPostedBy: id };
	Blog.find(myblog)
	.then(function(Post){
		res.send(Post);
	})
});

router.get('/blog/latest/limit=2',(req,res) => {
	var mysort = { blogPostDate: -1 };
	Blog.find().sort(mysort).limit(2)
	.then(function(blogDetails){
		res.send(blogDetails);
	})
});

router.get('/blog/latest/limit=3',(req,res) => {
	var mysort = { blogPostDate: -1 };
	Blog.find().sort(mysort).limit(3)
	.then(function(blogDetails){
		res.send(blogDetails);
	})
});

// User Display Single
router.get("/blog/display/:id",function(req,res){    
    const id = req.params.id;
    Blog.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        res.status(500).json({message : err})
    })
});



module.exports = router;