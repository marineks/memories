require("dotenv").config(); // .config is required to config dotenv
require("./../config/mongo"); // fetch the db connection

const MemoriesModel = require("./../models/Memories");

const memories = [
    {
        title: "Log nb 1",
        song: "Happy", 
        with: "My sister",
        mood: "joyful",
        description: "A nice day with family",
        date: "2019-12-09",
    },
    {
        title: "Log nb 2",
        song: "Eye of the tiger", 
        with: "Ironhackers",
        mood: "hopeful",
        description: "Beginning of a new Journey!",
        date: "2020-02-09",
    },
    {
        title: "Log nb 3",
        song: "If I was a rich girl", 
        with: "Best friends",
        mood: "excited",
        description: "Having fun with xmas shopping",
        date: "2020-12-20",
    }
  ];
  
  async function insertTestMemories() {
    try {
      await MemoriesModel.deleteMany();
      const insertedMems = await MemoriesModel.insertMany(memories);
      console.log("test memories seed done !");
      console.log(insertedMems);
    } catch (err) {
      console.error(err);
    }
  }
  
  insertTestMemories();

    