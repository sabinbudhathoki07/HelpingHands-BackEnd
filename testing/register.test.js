const User = require('../models/user');
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
describe('User Schema test anything', () => {
// the code below is for insert testing
 it('Add user testing anything',()=> {
 const user = {
 'userEmailAddress': 'bipishadahal@gmail.com',
 'userPassword': 'sabin123',
 'userFullName' : 'bipisha dahal',
 'userContactNumber' : '9876543210'

 };
 
 return User.create(user)
 .then((pro_ret) => {
 expect(pro_ret.userEmailAddress).toEqual('bipishadahal@gmail.com');
 });
 });
})