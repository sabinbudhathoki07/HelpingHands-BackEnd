const Later = require('../models/later');
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
 const Later = {
 'CampaignId': '',
 'LaterAddedByUser': 'test',

}

 });

 it("contact test anything", () => {
     const Later = {
         'CampaignId' : 'test',
         'LaterAddedByUser' : 'testt'
     };
 })
})