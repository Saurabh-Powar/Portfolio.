const express = require("express");
const app = express();
const port = 3000; // Changed port to match the frontend reference
const path = require("path");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Endpoint to download the resume file
app.get("/download-resume", (req, res) => {
  const filePath = path.join(__dirname, "public", "SaurabhPowar.pdf"); // Correct file path
  res.download(filePath, "SaurabhPowar.pdf", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file.");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});