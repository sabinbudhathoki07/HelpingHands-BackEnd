
const User = require('../models/user')
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
 it('Add User testing anything', () => {
 const user = {
 'userEmailAddress': 'sabinbudhathoki07@gmail.com',
 'userPassword': 'sabin123',
 
 };
 
 return User.findOne(user)
 .then((pro_ret) => {
 expect(pro_ret.userEmailAddress).toEqual('sabinbudhathoki07@gmail.com');
 expect(pro_ret.userPassword).toEqual('sabin123');
});
});
})

