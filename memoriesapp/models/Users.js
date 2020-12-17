const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  about: String,
  // avatar: {
  //   type: String,
  //   default: "./../public/images/neon-avatar.png"
  // },
  role: { type: String, enum: ["admin", "user", "editor"], default: "user" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;