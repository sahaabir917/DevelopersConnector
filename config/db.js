const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// connect Database

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("Mongo DB connected");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
