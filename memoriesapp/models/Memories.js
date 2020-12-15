const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoriesSchema = new Schema(
  {
    title: String,
    //imageSong: { type: Schema.Types.ObjectId, ref: "spotifyImg" }, /// WARNING: NOT SURE IT'S CORRECT
    // song: { type: Schema.Types.ObjectId, ref: "spotifySong" }, /// WARNING: SAME AS ABOVE
    song: String, // = id de la chanson // req Spotify
    waswith: String,
    mood: String,
    description: String,
    date: Date,
    isPublic: { 
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const MemoriesModel = mongoose.model("memory", memoriesSchema);

module.exports = MemoriesModel;
