const express = require('express');
const router = express.Router();
const MemoriesModel = require("./../models/Memories");

//// READ ALL MEMORIES

// Route: localhost:3000/memories/your-profile
router.get("/your-profile", async (req, res, next) => {
    
    try {
        const allMemories = await MemoriesModel.find();
        //console.log(allMemories)
        res.render("profile", { allMemories });
    } catch (err) {
        next(err);
    }
});

//// CREATE A MEMORY
// Route: GET  localhost:3000/memories/create
router.get("/create", (req, res) => {
        res.render("createMemory");
});


//// READ A MEMORY
// Route: localhost:3000/memories/:id
router.get("/:id", async (req, res, next) => {
    
    try {
        const oneMemory = await MemoriesModel.findById(req.params.id);
        //console.log(oneMemories);
        res.render("oneMemory", oneMemory );
    } catch (err) {
        next(err);
    }
});


// Route: CREATE POST localhost:3000/memories/create
router.post("/create", async (req, res, next) => {
      try {
        const createMem = { ...req.body }
        await MemoriesModel.create(createMem);
        console.log(req.body); // rend un objet vide!!!! why????
        res.redirect("/memories/your-profile");
      } catch (err) {
        next(err);
      }
    }
  );

// DELETE A MEMORY
router.get("/delete/:id", async (req, res, next) => {
    try {
      await MemoriesModel.findByIdAndRemove(req.params.id);
      res.redirect("/memories/your-profile");
    } catch (err) {
      next(err);
    }
  });

//// UPDATE A MEMORY
// Route: GET localhost:3000/memories/update/:id
router.get("/update/:id", async (req, res, next) => {
      try {
        const updateMemory = await MemoriesModel.findById(req.params.id);
        console.log(req.params.id);
        res.render("editMemory", updateMemory);
      } catch (err) {
        next(err);
      }
    }
  );

// Route: GET localhost:3000/memories/update/:id
router.post("/update/:id", async (req, res, next) => {
      try {
          //console.log(req.body);
        await MemoriesModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.redirect("/memories/your-profile");
      } catch (err) {
        next(err);
      }
    }
  );

module.exports = router;
