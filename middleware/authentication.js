const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Admin = require('../models/admin');
const authentication = require('../middleware/authentication');

module.exports.verifyUser = function(req, res, next){
   
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodeData = jwt.verify(token, 'secretkey');
        User.findOne({ _id: decodeData.userId })
          .then(function (UserAuthenticateData) {
            req.user = UserAuthenticateData;
            next();
          })
          .catch(function (error) {
            res.status(401).json({ message: error });
          });
      } catch (error) {
        res.status(401).json({ message: error + 'Unauthorized Access' });
      }
}

module.exports.verifyAdmin = function(req, res, next){
   
  try {
      const adminToken = req.headers.authorization.split(' ')[1];
      const decodeData = jwt.verify(adminToken, 'secretkey');
      Admin.findOne({ _id: decodeData.admdinId })
        .then(function (AdminAuthenticateData) {
          req.admin = AdminAuthenticateData;
          next();
        })
        .catch(function (error) {
          res.status(401).json({ message: error });
        });
    } catch (error) {
      res.status(401).json({ message: error + 'Unauthorized Access' });
    }
}
