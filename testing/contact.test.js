
const Contact = require('../models/contact');
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
 const contact = {
 'userEmail': 'test@gmail.com',
 'userFirstName': 'test',
 'userLastName': 'test1',
 'userMessage': 'we are testing',
 'userPhoneNumber': '9865628355;', 
'messageSentDate':'202145'
 }

 });

 it("contact test anything", () => {
     const contact = {
         'userEmail' : 'test@gmail.com',
         'userFirstName' : 'test'
     };
 })
})