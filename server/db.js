const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  console.log("MongoDB URI:", process.env.MONGODB_URI); // Log the URI for debugging

  try {
    await mongoose.connect(process.env.MONGODB_URI, connectionParams);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
