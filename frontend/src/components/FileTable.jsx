import {
  FileText,
  Image,
  FileSpreadsheet,
  MoreVertical
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

              <button className="file-action">
                <MoreVertical size={19} />
              </button>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default FileTable;