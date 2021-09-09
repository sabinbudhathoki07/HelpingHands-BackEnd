
const mongoose = require('mongoose');
const Admin = require('../models/admin');
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
describe('Admin Schema test anything', () => {
// the code below is for insert testing
 it('Add admin testing anything',()=> {
 const admin = {
 'adminEmailAddress': 'bipishadahal@gmail.com',
 'adminPassword': 'sabin123',
 'adminFirstname' : 'bipisha dahal',
 'adminContactNumber' : '9876543210'

 };
 
 return Admin.create(admin)
 .then((pro_ret) => {
 expect(pro_ret.adminEmailAddress).toEqual('bipishadahal@gmail.com');
 });
 });

it('Add Admin testing anything', () => {
    const admin = {
    'adminEmailAddress': 'bipishadahal@gmail.com',
    'adminPassword': 'sabin123',
    
    };
    
    return Admin.findOne(admin)
    .then((pro_ret) => {
    expect(pro_ret.adminEmailAddress).toEqual('bipishadahal@gmail.com');
    expect(pro_ret.adminPassword).toEqual('sabin123');
   });
   });
   })