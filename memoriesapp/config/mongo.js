const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
});

mongoose.connection.on("connected", () =>
  console.log("yaay mongodb connected and ready to rock!")
);

mongoose.connection.on("error", () =>
  console.log("noooo db connection error :(")
);
