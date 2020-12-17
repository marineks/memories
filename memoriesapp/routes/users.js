const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/Users");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");


// créer une route pour diriger ma home page

// Update user info

router.get("/update/:id", protectPrivateRoute, async (req, res, next) => {
    try {
      const updateMemory = await UserModel.findById(req.params.id);
      console.log(req.params.id);
      res.render("manageaccount", updateMemory);
    } catch (err) {
      next(err);
    }
  }
);

// Route: POST localhost:3000/memories/update/:id
router.post("/update/:id", protectPrivateRoute, async (req, res, next) => {
    try {
        //console.log(req.body);
      await UserModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.redirect("/");
    } catch (err) {
      next(err);
    }
  }
);

// Delete account

router.get("/delete/:id", protectPrivateRoute, async (req, res, next) => {
    try {
        await UserModel.findByIdAndRemove(req.params.id);
        console.log(req.params.id);
        res.redirect("/auth/signup");

    } catch (err) {
        next(err);
    }

}), 

// READ user info

// localhost:3000/users/:id
router.get("/:id", async (req, res, next) => {
    try {
        const infoUser = await UserModel.findById(req.params.id);
        res.render("manageaccount",  {infoUser} )
    } catch (err) {
        next(err);
    }
    

});

module.exports = router;
