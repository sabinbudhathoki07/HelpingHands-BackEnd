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
 'userEmailAddress': 'kirankarki026@gmail.com',
 'userPassword': 'sabin123',
 'userFullName' : 'sabin budhathoki',
 'userContactNumber' : '9876543210'

 };
 
 return User.create(user)
 .then((pro_ret) => {
 expect(pro_ret.userEmailAddress).toEqual('kirankarki026@gmail.com')
 });
 });
})

it('Find user testing anything', () => {
    const user = {
    
        userEmailAddress:'kirankarki026@gmail.com',
      

    };
    
    return User.findOne(user)
    .then((pro_ret) => {
    expect(pro_ret.userEmailAddress).toEqual('kirankarki026@gmail.com')
    });
    });

it('to test the update  User', async () => {
            return User.findByIdAndUpdate({_id :Object('6139c7e0fd3d6c001631cbac')}, 
           {$set : {
            userEmailAddress:'ujwalbudhathoki009@gmail.com',
                   
                   }})
            .then((pp)=>{
            expect(pp.userEmailAddress).toEqual('ujwalbudhathoki9@gmail.com')
        
            })
            
           });
    
    
           it('to test the delete  User', async () => {
            return User.findOneAndDelete({_id :Object('6139c7e0fd3d6c001631cbac')}, 
           {$set : {userEmailAddress:"ujwalbudhathoki009@gmail.com"}})
            .then((pp)=>{
            expect(pp.userEmailAddress).toEqual('ujwalbudhathoki009@gmail.com')
            })
            
           });

   
    