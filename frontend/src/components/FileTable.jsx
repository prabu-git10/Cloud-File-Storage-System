import { useState } from "react";
import {
  FileText,
  Image,
  FileSpreadsheet,
  MoreVertical,
  Download,
  Star,
  Trash2
} from "lucide-react";

const files = [
  {
    name: "Resume.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "Aug 08, 2026",
    icon: FileText
  },
  {
    name: "AWS-Lab.xlsx",
    type: "Excel",
    size: "1.8 MB",
    modified: "Aug 07, 2026",
    icon: FileSpreadsheet
  },
  {
    name: "profile.png",
    type: "Image",
    size: "850 KB",
    modified: "Aug 05, 2026",
    icon: Image
  },
  {
    name: "notes.txt",
    type: "Text",
    size: "12 KB",
    modified: "Aug 04, 2026",
    icon: FileText
  }
];

function FileTable() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (fileName) => {
    if (activeMenu === fileName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(fileName);
    }
  };

  return (
    <section className="files-section">

      <div className="section-header">
        <h2>Files</h2>

        <button className="view-all-button">
          View all
        </button>
      </div>

      <div className="file-table">

        <div className="file-table-header">
          <span>Name</span>
          <span>Type</span>
          <span>Size</span>
          <span>Modified</span>
          <span></span>
        </div>

        {files.map((file) => {

          const FileIcon = file.icon;

          return (
            <div
              className="file-row"
              key={file.name}
            >

              <div className="file-name">

                <div className="file-icon">
                  <FileIcon size={19} />
                </div>

                <span>{file.name}</span>

              </div>

              <span className="file-type">
                {file.type}
              </span>

              <span className="file-size">
                {file.size}
              </span>

              <span className="file-date">
                {file.modified}
              </span>

              <div className="file-action-wrapper">

                <button
                  className="file-action"
                  onClick={() => handleMenuToggle(file.name)}
                >
                  <MoreVertical size={19} />
                </button>

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
        })}

      </div>

    </section>
  );
}

export default FileTable;