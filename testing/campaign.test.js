
const Campaign = require('../models/campaign');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/HelpingHands-BackEnd';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});
describe('campaign the blog page', () => {
// the code below is for insert testing
 it('Add campaign testing anything', () => {
 const campaign = {
 'campaignImage': '',
 'campaignName': 'abc',
 'campaignShortDescription': 'dfghjkl',
 'campaignGoal': 'test3sdfghjkl',
 'campaignCategories': 'test3sdfghjkl',
 'campaignDays': 'test4dfghjkl;',
 'campaignTags': 'test3sdfghjkl',
 'campaignFullDescription': 'test3sdfghjkl',
 'campaignPostedBy': 'test',
 'campaignPostedBDate': '202145',
 
 

 }
 });

 it("to find something", () => {
     const campaign = {
         'campaignName' : 'abc',
     };
 })
})