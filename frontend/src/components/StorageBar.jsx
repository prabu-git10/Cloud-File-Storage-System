import { HardDrive } from "lucide-react";

function StorageBar() {
  const usedStorage = 72;
  const totalStorage = 100;

  const usagePercentage = (usedStorage / totalStorage) * 100;

  return (
    <div className="storage-card">

      <div className="storage-header">
        <div className="storage-title">
          <HardDrive size={20} />
          <span>Storage</span>
        </div>

        <span className="storage-percentage">
          {usagePercentage}%
        </span>
      </div>

      <div className="storage-info">
        <strong>{usedStorage} GB</strong>
        <span>of {totalStorage} GB used</span>
      </div>

      <div className="storage-track">
        <div
          className="storage-progress"
          style={{ width: `${usagePercentage}%` }}
        ></div>
      </div>

      <p className="storage-description">
        You have {totalStorage - usedStorage} GB of storage remaining.
      </p>

    </div>
  );
}

export default StorageBar;