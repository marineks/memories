// const express = require('express');
// const router = express.Router();
// const SpotifyWebApi = require('spotify-web-api-node');

// const { update } = require("../models/Users")

// const spotifyAPi = require("./../app");

// app.get("/", async (req, res) => {
    
//     res.render("home")
//   });

// app.get("/artist-search", async (req, res) => {
    
//     spotifyApi
//         .searchArtists(req.query.search)
//         .then(data => {
//             console.log('The received data from the API: ', data.body);
//             res.render('artist-search-results',  { artists: data.body.artists.items})
//         })
//         .catch(err => console.log('The error while searching artists occurred: ', err));
//   });

// une fois que ça créé, on peut update avec add = update ce qu'on a créé en rajoutant le champ url
// = en mémoire grâce à route ou req.query / req.params.id quel est le truc à updater