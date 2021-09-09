const Later = require('../models/later');
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
describe('testing the later page', () => {
// the code below is for insert testing
 it('Add blog testing anything', () => {
 const later = {
 'LaterAddedByUser': 'test',

}
return Later.create(later)
 .then((pro_ret) => {
 expect(pro_ret.LaterAddedByUser).toEqual('test');
 });
 });
});
 