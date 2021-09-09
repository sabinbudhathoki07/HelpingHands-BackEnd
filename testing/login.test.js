
const User = require('../models/user')
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
describe('user Schema test anything', () => {
// the code below is for insert testing
 it('Add user testing anything', () => {
 const user = {
 'userEmailAddress': 'test3@gmail.com',
 'userPassword': 'test3',
 
 };
 
//  return User.create(user)
//  .then((pro_ret) => {
//  expect(pro_ret.userEmailAddress).toEqual('testing3 ');
 });
 });