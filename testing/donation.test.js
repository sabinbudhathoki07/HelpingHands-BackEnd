
const Donation = require('../models/donation');
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
describe('testing the blog page', () => {
// the code below is for insert testing
 it('Add blog testing anything', () => {
 const Donation = {
 'campaignId': 'test@gmail.com',
 'campaignName': 'test',
 'donorFullName': 'test1',
 'donorEmailAddress': 'we are testing',
 'donorContactNumber': '9865628355;', 
 'donorAddress1': 'test@gmail.com',
 'donorAddress2': 'test',
 'donorCity': 'test1',
 'donorPostalCode': 'we are testing',
 'donorDonated': '9865628355;', 
 'donatedBy': 'we are testing',
 'donatedDate': '9865628355;', 

 }

 });

 it("contact test anything", () => {
     const Donation = {
         'userEmail' : 'test@gmail.com',
         'userFirstName' : 'test'
     };
 })
})