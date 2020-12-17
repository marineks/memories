require("dotenv").config(); // .config is required to config dotenv
require("./../config/mongo"); // fetch the db connection

const UserModel = require("./../models/Users");

const users = [
    { username: "Frank", email: "foo@foo.foo", password: "JS", role: "admin", about:"Lead teacher at Ironhack" },
    { username: "Jacqueline", email: "bar@bar.bar", password: "Go", role: "user", about:"Badass Canadian expat with good music taste" },
    { username: "Julie", email: "baz@baz.baz", password: "Rust", role: "user", about:"One direction fan girl" },
    { username: "Marine", email: "jane@doe.org", password: "Java", role: "user", about:"Weirdo with eclectic music choices" },
    {
      username: "Bill",
      email: "bill@bascora.bizz",
      password: "PHP",
      role: "user",
    },
    {
      username: "will",
      email: "will@coder.com",
      password: "Pascal",
      role: "user",
    },
  ];
  
  async function insertTestUsers() {
    try {
      await UserModel.deleteMany();
      const insertedUsers = await UserModel.insertMany(users);
      console.log("test users seed done !");
      console.log(insertedUsers);
    } catch (err) {
      console.error(err);
    }
  }
  
  insertTestUsers();