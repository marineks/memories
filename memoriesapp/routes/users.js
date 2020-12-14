var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//// PART THAT IS COMMENTED UNTIL FURTHER NOTICE
//const express = require("express");
//const router = new express.Router(); //what is this
//const UserModel = require("./../models/Users");
//const bcrypt = require("bcrypt");
//
//router.get("/signup", (req, res) => {
//  res.render("signup");
//});
//
//router.post("/signup", async (req, res, next) => {
//  try {
//    const newUser = { ...req.body };
//    const foundUser = await UserModel.findOne({ email: newUser.email });
//
//    if (foundUser) {
//      req.flash("warning", "Email already registered");
//      res.redirect("/signin");
//    } else {
//      const hashedPassword = bcrypt.hashSync(newUsers.password, 10);
//      newUsers.password = hashedPassword;
//      await UserModel.create(newUser);
//      req.flash("success", "Congrats ! You are now registered !");
//      res.redirect("/");
//    }
//  } catch (error) {
//    next(error);
//  }
//});
//
//router.get("/signin", (req, res) => {
//  res.render("signin");
//});
//
//router.post("/signin", async (req, res, next) => {
//  const { email, password } = req.body;
//  const foundUser = await UserModel.findOne({ email: email });
//
//  if (!foundUser) {
//    req.flash("error", "Invalid credentials");
//    res.redirect("/signin");
//  } else {
//    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
//    if (!isSamePassword) {
//      req.flash("error", "Invalid credentials");
//      res.redirect("/signin");
//    } else {
//      const userDocument = { ...foundUser };
//      const userObject = foundUser.toObject();
//      delete userObject.password;
//      req.session.currentUser = userObject;
//      req.flash("success", "Successfully logged in...");
//      res.redirect("/");
//    }
//  }
//});
//
//router.get("/logout", async (req, res, next) => {
//  req.session.destroy(function (err) {
//    res.redirect("/signin");
//  });
//});
//
//module.exports = router;
//



module.exports = router;
