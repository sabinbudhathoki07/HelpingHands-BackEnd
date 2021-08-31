const mongoose = require('mongoose');

const Admin= mongoose.model('Admin', {
  
	adminFirstname: { 
        type: String, require:true
    },
    adminLastname: { 
        type: String, require:true
    },
    adminEmailAddress :{
        type: String, require:true
    },
    adminContactNumber: { 
        type: String , require:true
    },
    adminPassword :{
        type: String, require:true
    }
});

module.exports = Admin;