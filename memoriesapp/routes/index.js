const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/Users");


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let infoUser;
    if (req.session.currentUser) {
        infoUser = await UserModel.findById(req.session.currentUser._id);
    }
    res.render('index', {infoUser});
  } catch (err) {
    next(err)
  }
  
});

module.exports = router;
