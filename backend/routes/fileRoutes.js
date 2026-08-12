const express = require("express");
const multer = require("multer");

const { uploadFile } = require("../services/s3Service");

const router = express.Router();

// Multer configuration
// Files are kept in memory temporarily before being sent to S3.
const upload = multer({
  storage: multer.memoryStorage(),
});

// Get all files
router.get("/", (req, res) => {
  res.json({
    success: true,
    files: [
      {
        id: 1,
        name: "Resume.pdf",
        type: "PDF",
        size: "2.4 MB",
      },
      {
        id: 2,
        name: "AWS-Lab.xlsx",
        type: "Excel",
        size: "1.8 MB",
      },
      {
        id: 3,
        name: "profile.png",
        type: "Image",
        size: "850 KB",
      },
    ],
  });
});

// Upload a file
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // Check whether a file was received
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Send the file to S3
    await uploadFile(req.file);

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file: {
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
      },
    });
  } catch (error) {
    console.error("Upload route error:", error);

    res.status(500).json({
      success: false,
      message: "File upload failed",
    });
  }
});

module.exports = router;
