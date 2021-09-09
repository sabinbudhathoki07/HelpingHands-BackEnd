
const Donation = require('../models/donation');
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://admin:admin@helpinghands.mfykl.mongodb.net/helpinghands?retryWrites=true&w=majority';
beforeAll(async () => {
 await mongoose.connect(MONGO_URI, {
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
 const donation = {
 'campaignId': 'test1@gmail.com',
 'campaignName': 'test',
 'donorFullName': 'test1',
 'donorEmailAddress': 'we are testing',
 'donorContactNumber': '9865628355;', 
 'donorAddress2': 'test',
 'donorCity': 'test1',
 'donorPostalCode': 'we are testing',
 'donorDonated': '9865628355;', 
 'donatedBy': 'we are testing',


 }
 return Donation.create(donation)
 .then((pro_ret) => {
 expect(pro_ret.campaignId).toEqual('test1@gmail.com');
 });
 });
})
 