require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Import video details module
const videos = require("./routes/videos");

// Middleware
app.use(cors());
app.use(express.json());

// Videos list mounting 
app.use("/videos", videos);

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
