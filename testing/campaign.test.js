
const Campaign = require('../models/campaign');
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
describe('campaign the blog page', () => {
// the code below is for insert testing
 it('Add campaign testing anything', () => {
 const campaign = {
 'campaignImage': '',
 'campaignName': 'sabin',
 'campaignShortDescription': 'dfghjkl',
 'campaignGoal': 'test3sdfghjkl',
 'campaignCategories': 'test3sdfghjkl',
 'campaignDays': 'test4dfghjkl;',
 'campaignTags': 'test3sdfghjkl',
 'campaignFullDescription': 'test3sdfghjkl',
 'campaignPostedBy': 'test',
 'campaignPostedBDate': '202145',
 


 }

 return Campaign.create(campaign)
 .then((pro_ret) => {
 expect(pro_ret.campaignName).toEqual('sabin');
 });
 });
 });

 it('Find Single campaign name testing anything', () => {
    const campaign = {
    
        campaignName:'sabin',
      

    };
    
    return Campaign.findOne(campaign)
    .then((pro_ret) => {
    expect(pro_ret.campaignName).toEqual('sabin');
    });
    });

    it('to test the update  Campaign', async () => {
        return Campaign.findByIdAndUpdate({_id :Object('613a0d3ab04d902410f7625d')}, 
       {$set : {
        campaignName:'sabinbudhathoki',
               
               }})
        .then((pp)=>{
        expect(pp.campaignName).toEqual('sabin')
    
        })
        
       });


       it('to test the delete  Campaign', async () => {
        return Campaign.findOneAndDelete({_id :Object('613a0d3ab04d902410f7625d')}, 
       {$set : {campaignName:"sabinbudhathoki"}})
        .then((pp)=>{
        expect(pp.campaignName).toEqual('sabinbudhathoki')
        })
        
       });