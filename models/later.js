const mongoose = require('mongoose');
const Later = mongoose.model('Later', {
  CampaignId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign',
    },
  ],
  LaterAddedByUser: 
    {
      type: String, require: true
    },
});
module.exports = Later;
