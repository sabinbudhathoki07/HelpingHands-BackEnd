
const Volunteer = require('../models/volunteer');
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
 const Volunteer = {
 'volunteerImage': '',
 'volunteerFullName': 'test',
 'volunteerEmailAddress': 'test1@gmail.com',
 'volunteerDateOfBirth': '10/11/1998',
 'volunteerGender': 'male;', 
 'volunteerContactNumber': '896542634',
 'volunteerAddress': 'test',
 'volunteerPostalCode': '2250',
 'userMessage': 'we are testing',
 'volunteerNationality': 'nepalese;', 

 }

 });

 it("contact test anything", () => {
     const Volunteer = {
         'volunteerFullName' : 'test1',
         'volunteerEmailAddress' : 'test1@gmail.com'
     };
 })
})