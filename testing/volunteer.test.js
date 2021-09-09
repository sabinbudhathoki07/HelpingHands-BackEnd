
const Volunteer = require('../models/volunteer');
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
describe('testing the volunteer page', () => {
// the code below is for insert testing
 it('Add volunteer testing anything', () => {
 const volunteer = {
 'volunteerImage': '',
 'volunteerFullName': 'test',
 'volunteerEmailAddress': 'testsabin@gmail.com',
 'volunteerGender': 'male;', 
 'volunteerContactNumber': '896542634',
 'volunteerAddress': 'test',
 'volunteerPostalCode': '2250',
 'userMessage': 'we are testing',
 'volunteerNationality': 'nepalese;', 

 }
 return Volunteer.create(volunteer)
 .then((pro_ret) => {
 expect(pro_ret.volunteerFullName).toEqual('test');
 });
 });
});
 