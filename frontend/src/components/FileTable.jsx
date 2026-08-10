import { useState } from "react";
import {
  FileText,
  Image,
  FileSpreadsheet,
  MoreVertical,
  Download,
  Star,
  Trash2,
} from "lucide-react";

const files = [
  {
    name: "Resume.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "Aug 08, 2026",
    icon: FileText,
  },
  {
    name: "AWS-Lab.xlsx",
    type: "Excel",
    size: "1.8 MB",
    modified: "Aug 07, 2026",
    icon: FileSpreadsheet,
  },
  {
    name: "profile.png",
    type: "Image",
    size: "850 KB",
    modified: "Aug 05, 2026",
    icon: Image,
  },
  {
    name: "notes.txt",
    type: "Text",
    size: "12 KB",
    modified: "Aug 04, 2026",
    icon: FileText,
  },
];

function FileTable({ searchTerm = "" }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMenuToggle = (fileName) => {
    if (activeMenu === fileName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(fileName);
    }
  };

  return (
    <section className="files-section">

      {/* Section Header */}
      <div className="section-header">
        <h2>Files</h2>

        <button className="view-all-button">
          View all
        </button>
      </div>

      {/* File Table */}
      <div className="file-table">

        {/* Table Header */}
        <div className="file-table-header">
          <span>Name</span>
          <span>Type</span>
          <span>Size</span>
          <span>Modified</span>
          <span></span>
        </div>

        {/* Files / No Results */}
        {filteredFiles.length === 0 ? (

          <div className="no-files">
            No files found.
          </div>

        ) : (

          filteredFiles.map((file) => {
            const FileIcon = file.icon;

            return (
              <div
                className="file-row"
                key={file.name}
              >

                {/* File Name */}
                <div className="file-name">

                  <div className="file-icon">
                    <FileIcon size={19} />
                  </div>

                  <span>{file.name}</span>

                </div>

                {/* File Type */}
                <span className="file-type">
                  {file.type}
                </span>

                {/* File Size */}
                <span className="file-size">
                  {file.size}
                </span>

                {/* Modified Date */}
                <span className="file-date">
                  {file.modified}
                </span>

                {/* Actions */}
                <div className="file-action-wrapper">

                  <button
                    className="file-action"
                    onClick={() => handleMenuToggle(file.name)}
                  >
                    <MoreVertical size={19} />
                  </button>

                  {/* Action Menu */}
                  {activeMenu === file.name && (
                    <div className="file-menu">

                      <button>
                        <Download size={16} />
                        <span>Download</span>
                      </button>

                      <button>
                        <Star size={16} />
                        <span>Star</span>
                      </button>

                      <button className="delete-action">
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </button>

                    </div>
                  )}

                </div>

              </div>
            );
          })

        )}

      </div>

    </section>
  );
}

export default FileTable;