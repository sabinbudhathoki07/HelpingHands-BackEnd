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

it('Find Admin testing anything', () => {
    const admin = {
    
        adminEmailAddress:'bipishadahal@gmail.com',
      

    };
    
    return Admin.findOne(admin)
    .then((pro_ret) => {
    expect(pro_ret.adminEmailAddress).toEqual('bipishadahal@gmail.com');
    });
    });

it('to test the update  Admin', async () => {
            return Admin.findByIdAndUpdate({_id :Object('6139a52c25f63910a0ff9983')}, 
           {$set : {
            adminEmailAddress:'bipishadahal1@gmail.com',
                   
                   }})
            .then((pp)=>{
            expect(pp.adminEmailAddress).toEqual('bipishadahal@gmail.com')
        
            })
            
           });
    
    
           it('to test the delete  Admin', async () => {
            return Admin.findOneAndDelete({_id :Object('6139a52c25f63910a0ff9983')}, 
           {$set : {adminEmailAddress:"bipishadahal1@gmail.com"}})
            .then((pp)=>{
            expect(pp.adminEmailAddress).toEqual('bipishadahal1@gmail.com')
            })
            
           });

   
    