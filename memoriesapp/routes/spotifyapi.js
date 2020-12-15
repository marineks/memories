// const express = require('express');
// const router = express.Router();
// const SpotifyWebApi = require('spotify-web-api-node');

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
