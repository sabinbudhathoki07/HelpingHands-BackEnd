const Team = require('../models/team');
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
describe('testing the team page', () => {
// the code below is for insert testing
 it('Add team testing anything', () => {
 const team = {
 'teamemberImage': '',
 'teamemberName': 'test',
 'teamemberDescription': 'test1test2test3',
}
return Team.create(team)
 .then((pro_ret) => {
 expect(pro_ret.teamemberName).toEqual('test');
 });
 });
});
 

