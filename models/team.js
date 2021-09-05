

const mongoose = require('mongoose');
const jsonWebToken = require('jsonwebtoken');

const TeamMember = mongoose.model('TeamMember', {

     teamemberImage: { type: String, require :true},
     teamemberName: { type: String, require :true},
     teamemberDescription: { type: String, require :true},
     teamemberPosition: { type: String, require :true},
     teamemberRegisteredDate:{ type: Date, default: Date.now}
});

module.exports = TeamMember;
