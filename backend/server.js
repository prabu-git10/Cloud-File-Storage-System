const express = require("express");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes");
const { testS3Connection } = require("./services/s3Service");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/files", fileRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Cloud File Storage API is running!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  testS3Connection();
});