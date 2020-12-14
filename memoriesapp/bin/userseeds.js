require("dotenv").config(); // .config is required to config dotenv
require("./../config/mongo"); // fetch the db connection

const UserModel = require("./../models/Users");

const users = [
    { username: "foo", email: "foo@foo.foo", password: "JS", role: "admin" },
    { username: "bar", email: "bar@bar.bar", password: "Go", role: "user" },
    { username: "baz", email: "baz@baz.baz", password: "Rust", role: "user" },
    { username: "jane", email: "jane@doe.org", password: "Java", role: "user" },
    {
      username: "bill",
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