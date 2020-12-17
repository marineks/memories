const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  memory_id: { type: Schema.Types.ObjectId, ref: "memory" },
  role: { type: String, enum: ["admin", "user", "editor"], default: "user" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;