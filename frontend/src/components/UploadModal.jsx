import { useState } from "react";
import { Upload, X, File } from "lucide-react";

function UploadModal({ isOpen, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <div className="upload-modal">

        {/* Modal Header */}
        <div className="modal-header">

          <div>
            <h2>Upload Files</h2>

            <p>
              Select files to upload to your cloud storage.
            </p>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>


        {/* Upload Area */}
        <div className="upload-area">

          <div className="upload-icon">
            <Upload size={28} />
          </div>

          <h3>Drop files here</h3>

          <p>
            or select files from your computer
          </p>

          <label className="browse-button">

            Browse Files

            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />

          </label>

        </div>


        {/* Selected File */}
        {selectedFile && (
          <div className="selected-file">

            <File size={20} />

            <div>

              <span>
                {selectedFile.name}
              </span>

              <small>
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </small>

            </div>

          </div>
        )}


        {/* Modal Actions */}
        <div className="modal-actions">

          <button
            className="cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="upload-button"
            disabled={!selectedFile}
          >
            Upload
          </button>

        </div>

      </div>

    </div>
  );
}

export default UploadModal;