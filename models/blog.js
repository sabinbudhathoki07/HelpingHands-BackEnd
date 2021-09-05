

const mongoose = require('mongoose');
const jsonWebToken = require('jsonwebtoken');

const Blog = mongoose.model('Blog', {

     blogImage: { type: String, require :true},
     blogTitle: { type: String, require :true},
     blogDescription: { type: String, require :true},
     blogDetail: { type: String, require :true},
     blogTags: { type: String,require:true},
     blogPostedBy:{ type: String, default: "Admin"},
     blogPostDate:{ type: Date, default: Date.now}
});

module.exports = Blog;
