const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/Users");
const bcrypt = require("bcrypt");


//route to sign-in page
router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email: email });

  if (!foundUser) {
    req.flash("error", "Invalid credentials");
    res.redirect("/auth/signin");
  } else {
    
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);

    if (!isSamePassword) {
      req.flash("error", "Invalid credentials");
      res.redirect("/auth/signin");
    } else {

      const userDocument = { ...foundUser };
      const userObject = foundUser.toObject();
      delete userObject.password; 
      req.session.currentUser = userObject; 

      req.flash("success", "Successfully logged in...");
      res.redirect("/memories/your-profile");
    }
  }
});



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
      req.flash("success", "You have now registered your account, welcome!");
      res.redirect("/auth/signin");
    }
  } catch (err) {
    next(err);
  }
});

// Route to log out 
router.get("/logout", async (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect("/auth/signin");
  });
});


module.exports = router;
