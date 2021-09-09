const express = require('express');
const router = express.Router();
const Later = require('../models/later');
const { check, validationResult } = require('express-validator');

router.post(
  '/later/add/:id',
  function (req, res) {
    const CampaignId = req.params.id;
    const LaterData = new Later({
      CampaignId: CampaignId,
      LaterAddedByUser: req.body.userId,
    });
    LaterData.save()
      .then(function (LaterSuccess) {
        res
          .status(201)
          .json({ success: true, message: 'Later Added' });
      })
      .catch(function (error) {
        res.status(500).json({ success: false, message: error });
      });
  }
);

module.exports = router;
