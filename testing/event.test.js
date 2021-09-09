
const Event = require('../models/event');
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
 const event = {
 'eventImage': '',
 'eventName': 'test',
 'eventShortDescription': 'test1test2test3',
 'eventAttendees': 'testt',
 'eventDate': '12/01/2021', 
 'eventMonth': 'december',
 'eventYear': '2021',
 'eventCategories': 'test1',
 'eventLocation': 'basantapur',
 'eventFullDescription': 'testetsttses;',
'eventPostedBy': 'dilip',
'eventPostDtae': "20202547",
 
}
 return Event.create(event)
 .then((pro_ret) => {
 expect(pro_ret.eventName).toEqual('test');
 });
 });
});
 