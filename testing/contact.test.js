
const Contact = require('../models/contact');
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
describe('testing the contact page', () => {
// the code below is for insert testing
 it('Add contact testing anything', () => {
 const contact = {
 'userEmail': 'test@gmail.com',
 'userFirstName': 'test',
 'userLastName': 'test1',
 'userMessage': 'we are testing',
 'userPhoneNumber': '9865628355;', 
'messageSentDate':'202145'
 }
 return Contact.create(contact)
 .then((pro_ret) => {
 expect(pro_ret.userEmail).toEqual('test@gmail.com');
 });
 });
})

it('Find single contact testing anything', () => {
    const contact = {
    
        userEmail:'test@gmail.com',
      

    };
    
    return Contact.findOne(contact)
    .then((pro_ret) => {
    expect(pro_ret.userEmail).toEqual('test@gmail.com');
    });
    });

    it('to test the update  contact', async () => {
        return Contact.findByIdAndUpdate({_id :Object('6139a04900dda011fc4cf562')}, 
       {$set : {
        userEmail:'test1@gmail.com',
               
               }})
        .then((pp)=>{
        expect(pp.userEmail).toEqual('test@gmail.com')
    
        })
        
       });


       it('to test the delete  contact', async () => {
        return Contact.findOneAndDelete({_id :Object('6139a4c1f0d7cd07601b0aa6')}, 
       {$set : {userEmail:"test1@gmail.com"}})
        .then((pp)=>{
        expect(pp.userEmail).toEqual('test1@gmail.com')
        })
        
       });