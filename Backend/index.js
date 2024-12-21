const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bookRoute=require('./Route/bookRoute');
const cors = require('cors');
const userRoute =require('./Route/userRoute');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(cors());
if (!URI) {
  console.error("Error: MongoDB URI is not defined in the environment variables.");
  process.exit(1); // Exit the application if MongoDB URI is missing
}

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application if unable to connect
  }
};

// Initialize the server
const startServer = async () => {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
//defining route

app.use('/book',bookRoute);
app.use('/user',userRoute);

// Start the server
startServer();
