
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
describe('testing the admin page', () => {
// the code below is for insert testing
 it(' admin testing anything', () => {
 const Admin = {
 'adminFirstname': 'test',
 'adminLastname': 'testtest',
 'adminEmailAddress': 'test1test2test3',
 'adminContactNumber': 'testt',
 'adminPassword': '12/01/2021', 

 
}

 });

 it("admin test anything", () => {
     const Admin = {
         'adminFirstname' : 'test',
         'adminLastname' : 'testtest'
     };
 })
})