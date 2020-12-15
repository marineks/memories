const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/Users");
const bcrypt = require("bcrypt");

//route to sign-up page
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res, next) => {
  try {
    const newUser = { ...req.body };
    const foundUser = await UserModel.findOne({ email: newUser.email });

    if (foundUser) {
      req.flash("warning", "This email is already linked to an account");
      res.redirect("/auth/signin");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await UserModel.create(newUser);
      //req.flash("success", "You have now registered your account, welcome!");
      res.redirect("/memories/createMemory");
    }
  } catch (err) {
    next(err);
  }
});

//router.post("/signup", async (req, res, next) => {
//  try {
//    const newUser = { ...req.body };
//    const foundUser = await UserModel.findOne({ email: newUser.email });
//
//    if (foundUser) {
//      req.flash("warning", "Email already registered");
//      res.redirect("/signup");
//    } else {
//      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
//      newUser.password = hashedPassword;
//      await UserModel.create(newUser);
//      req.flash("success", "Congrats ! You are now registered !");
//      res.redirect("/");
//    }
//  } catch (error) {
//    next(error);
//  }
//});

//route to sign-in page
router.get("/signin", (req, res) => {
  res.render("signin");
});

module.exports = router;
