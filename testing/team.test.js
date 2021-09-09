const Team = require('../models/team');
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
 const team = {
 'teamemberImage': '',
 'teamemberName': 'test',
 'teamemberDescription': 'test1test2test3',
 'teamemberRegisteredDate': 'testt',
}

 });

 it("contact test anything", () => {
     const Team = {
         'teamemberImage' : 'test',
         'teamemberName' : 'testt'
     };
 })
})