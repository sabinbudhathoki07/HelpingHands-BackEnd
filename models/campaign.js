

const mongoose = require('mongoose');
const jsonWebToken = require('jsonwebtoken');

const Campaign = mongoose.model('Campaign', {

     campaignImage: { type: String, require :true},
     campaignName: { type: String, require :true},
     campaignShortDescription: { type: String, require :true},
     campaignGoal: { type: String,require:true},
     campaignCollected: { type: Number, default:0},
     campaignDays: { type: String,require:true},
     campaignCategories: { type: String,require:true},
     campaignTags: { type: String,require:true},
     campaignFullDescription: { type: String, require :true},
     campaignPostedBy:{ type: String, default: "Admin"},
     campaignPostDate:{ type: Date, default: Date.now}
});

module.exports = Campaign;
