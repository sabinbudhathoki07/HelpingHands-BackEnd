

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema( {

    // Personal Details
    userFullName: { type: String, require :true},
    userBalance: { type: Number, default : 0},
    userEmailAddress: { type: String, require:true, unique:true },
    userContactNumber: { type: String, require :true},
    userPassword: { type: String, require :true},
    ConfirmationCode: {
        type: String,
        unique: true,
      },
      Status: {
        type: String,
        enum: ["NotVerified", "Verified"],
        default: "NotVerified",
      },
});

module.exports = mongoose.model('User',userSchema);

