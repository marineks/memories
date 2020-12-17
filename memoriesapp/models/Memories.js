const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoriesSchema = new Schema(
  {
    title: String,
    song: String, 
    waswith: String,
    mood: String,
    description: String,
    date: Date,
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
    isPublic: { 
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const MemoriesModel = mongoose.model("memory", memoriesSchema);

module.exports = MemoriesModel;
