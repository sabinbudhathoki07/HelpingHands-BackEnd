
const Blog = require('../models/blog');
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
describe('testing the blog page', () => {
// the code below is for insert testing
 it('Add blog testing anything', () => {
 const blog = {
 'blogImage': '',
 'blogTitle': 'abcde',
 'blogDescription': 'dfghjkl',
 'blogDetail': 'test3sdfghjkl',
 'blogTags': 'test4dfghjkl;',
 'blogPostedBy': 'test',
 'blogPostDate': '202145;',
 }


 
 return Blog.create(blog)
 .then((pro_ret) => {
 expect(pro_ret.blogDescription).toEqual('dfghjkl');
 });
 });



it('Find Blog testing anything', () => {
    const blog = {
    
        blogTitle:'abcde',
      

    };
    
    return Blog.findOne(blog)
    .then((pro_ret) => {
    expect(pro_ret.blogTitle).toEqual('abcde');
    });
    });

it('to test the update  Blog', async () => {
            return Blog.findByIdAndUpdate({_id :Object('6139a04900dda011fc4cf562')}, 
           {$set : {
            blogTitle:'abcde1',
                   
                   }})
            .then((pp)=>{
            expect(pp.blogTitle).toEqual('abcd')
        
            })
            
           });
    
    
           it('to test the delete  Blog', async () => {
            return Blog.findOneAndDelete({_id :Object('6139a04900dda011fc4cf562')}, 
           {$set : {blogTitle:"abcde1"}})
            .then((pp)=>{
            expect(pp.blogTitle).toEqual('abcde1')
            })
            
           });
        });

   
    