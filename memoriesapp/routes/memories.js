const express = require('express');
const router = express.Router();
const MemoriesModel = require("./../models/Memories");
const UserModel = require("./../models/Users");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");
const SpotifyWebApi = require('spotify-web-api-node');

//// READ ALL MEMORIES

// Route: localhost:3000/memories/your-profile
router.get("/your-profile", async (req, res, next) => {
    
    try {
      
        const infoUser = await UserModel.findById(req.session.currentUser._id)
        //console.log("PLEASE WORK", infoUser); // casse les internets
        const allMemories = await MemoriesModel.find({user_id : req.session.currentUser._id}).populate("user_id").sort({ date: -1 })
        //console.log(allMemories)
        res.render("profile", { allMemories, infoUser })
    } catch (err) {
        next(err);
    }
});

//// CREATE A MEMORY
// Route: GET  localhost:3000/memories/create
router.get("/create", protectPrivateRoute, (req, res) => {
        res.render("search");
});

// Route: CREATE POST localhost:3000/memories/create
router.post("/create", protectPrivateRoute, async (req, res, next) => {
      try {

        let createMem = { ...req.body };
        createMem.user_id = req.session.currentUser._id;
        await MemoriesModel.create(createMem);
        //console.log(req.body); 
        res.redirect("/memories/your-profile");
      } catch (err) {
        next(err);
      }
    }
  );


  // SPOTIFY ROUTES
  
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

  spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));
  
 
  /// => Here when the form is submitted, tracks appear according to the user's search
    router.get("/choose-song", async (req, res) => {
      
        spotifyApi
        .searchTracks(req.query.search, {limit: 8})
        .then(data => {
                console.log('The received data from the API: ', data.body.tracks.items[1].album)
                res.render('createMemory',  { tracks: data.body.tracks.items})
            })
        .catch(err => console.log('The error while searching artists occurred: ', err));
  
      });

  

//// READ A MEMORY
// Route: localhost:3000/memories/:id
router.get("/:id", protectPrivateRoute, async (req, res, next) => {
    
  try {
      const oneMemory = await MemoriesModel.findById(req.params.id);
      //console.log(oneMemories);
      res.render("oneMemory", oneMemory );
  } catch (err) {
      next(err);
  }
});

// DELETE A MEMORY
router.get("/delete/:id", protectPrivateRoute, async (req, res, next) => {
  try {
    await MemoriesModel.findByIdAndRemove(req.params.id);
    res.redirect("/memories/your-profile");
  } catch (err) {
    next(err);
  }
});

//// UPDATE A MEMORY
// Route: GET localhost:3000/memories/update/:id
router.get("/update/:id", protectPrivateRoute, async (req, res, next) => {
    try {
      const updateMemory = await MemoriesModel.findById(req.params.id);
      //console.log(req.params.id);
      res.render("editMemory", updateMemory);
    } catch (err) {
      next(err);
    }
  }
);

// Route: POST localhost:3000/memories/update/:id
router.post("/update/:id", protectPrivateRoute, async (req, res, next) => {
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
