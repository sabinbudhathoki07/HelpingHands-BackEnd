const mongoose = require('mongoose');
const jsonWebToken = require('jsonwebtoken');

const Event = mongoose.model('Event', {

     eventImage: { type: String, require :true},
     eventName: { type: String, require :true},
     eventShortDescription: { type: String, require :true},
     eventAttendees: { type: String,require:true},
     eventDate: { type: String,require:true},
     eventMonth: { type: String,require:true},
     eventYear: { type: String,require:true},
     eventCategories: { type: String,require:true},
     eventLocation: { type: String,require:true},
     eventFullDescription: { type: String, require :true},
     eventPostedBy:{ type: String, default: "Admin"},
     eventPostDtae:{ type: Date, default: Date.now}
});

module.exports = Event;
