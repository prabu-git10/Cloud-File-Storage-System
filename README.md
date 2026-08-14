# ☁️ Cloud File Storage System

A full-stack cloud file storage application inspired by modern cloud-drive platforms. The system allows users to upload, view, search, download, star, and delete files while securely storing them in a private Amazon S3 bucket.

The application is built with React and Node.js and deployed on AWS using Amazon EC2, Amazon S3, IAM, PM2, and Nginx.

---

## 🚀 Project Overview

The Cloud File Storage System demonstrates how a full-stack application can be integrated with AWS cloud infrastructure.

The frontend provides a simple file-management interface, while the Node.js backend communicates with Amazon S3 using the AWS SDK.

For production deployment:

- React frontend is served through Nginx on Amazon EC2.
- Node.js/Express backend runs on Amazon EC2.
- PM2 manages the backend process.
- Amazon S3 provides private object storage.
- IAM Role provides secure AWS authentication to EC2.
- No AWS access keys are stored on the EC2 server.

---

## ✨ Features

- 📤 Upload files
- 📁 View stored files
- 🔍 Search files
- ⭐ Star files
- 📥 Download files
- 🗑️ Delete files
- 📊 Monitor storage usage
- 📅 Display file information
- 📦 Private Amazon S3 storage
- 🔐 Presigned URLs for private downloads
- 📏 10 MB file-size validation
- 🔄 Refresh file and storage information
- 🌐 Production deployment on AWS EC2

---

## 🏗️ Architecture

```text
                         Internet
                            │
                            ▼
                    ┌────────────────┐
                    │     Nginx      │
                    │   Port 80      │
                    └───────┬────────┘
                            │
                            ▼
                    ┌────────────────┐
                    │ React + Vite   │
                    │   Frontend     │
                    └───────┬────────┘
                            │
                            │ REST API
                            ▼
                    ┌────────────────┐
                    │ Node.js        │
                    │ Express        │
                    │ Backend        │
                    └───────┬────────┘
                            │
                     AWS IAM Role
                            │
                            ▼
                    ┌────────────────┐
                    │  Amazon S3     │
                    │ Private Bucket │
                    └────────────────┘
