const s3 = require("../config/s3");

const {
  ListObjectsV2Command,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");

// Test S3 connection and list files
async function testS3Connection() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_S3_BUCKET,
    });

    const response = await s3.send(command);

    console.log("S3 connection successful!");
    console.log("Files in bucket:", response.Contents || []);

    return response;
  } catch (error) {
    console.error("S3 connection failed:", error);
    throw error;
  }
}

// Upload a file to S3
async function uploadFile(file) {
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    const response = await s3.send(command);

    console.log(`File uploaded successfully: ${file.originalname}`);

    return response;
  } catch (error) {
    console.error("S3 upload failed:", error);
    throw error;
  }
}

module.exports = {
  testS3Connection,
  uploadFile,
};