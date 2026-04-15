import React, { useState, useEffect, ChangeEvent } from "react";
import { uploadData, getUrl, remove, list } from "aws-amplify/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faDownload,
  faTrashAlt,
  faSyncAlt,
  faFile,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";


interface StorageFile {
  key: string;
  size?: number;
  eTag?: string;
  lastModified?: Date;
}

const FileStorage: React.FC = () => {
  const [files, setFiles] = useState<StorageFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);


  //Dateien aus dem S3 werden hier aufgelistet
  const fetchFiles = async (): Promise<void> => {
    try {
      setLoading(true);
      const fileList = await list();
      setFiles(fileList.items as unknown as StorageFile[]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  //Ausgeführt sobald man eine Datei auswählen möchte
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  //Datei upload
  const uploadFile = async (): Promise<void> => {
    if (!selectedFile) return;
    try {
      setUploading(true);
      await uploadData({
        key: selectedFile.name,
        data: selectedFile,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              const progressPercentage =
                (transferredBytes / totalBytes) * 100;
              setUploadProgress(progressPercentage);
            }
          },
        },
      }).result;

      setUploading(false);
      setSelectedFile(null);
      const inputEl = document.getElementById(
        "file-input"
      ) as HTMLInputElement | null;
      if (inputEl) inputEl.value = "";
      fetchFiles();
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  //Datei download
  const downloadFile = async (key: string) => {
  try {
    const result = await getUrl({ key });
    window.open(result.url.toString(), '_blank');
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

  // Datei löschen
  const deleteFile = async (key: string) => {
  try {
    await remove({ key });
    fetchFiles();
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};



  //Dateigröße in B, KB, MB
  const formatFileSize = (size: number): string => {
    if (size < 1024) return size + " B";
    else if (size < 1024 * 1024)
      return (size / 1024).toFixed(1) + " KB";
    else return (size / (1024 * 1024)).toFixed(1) + " MB";
  };

  //Knöpfe und ihre Funktionen
return (
  <div className="file-storage-container">
    <section className="upload-section">
      <h2>Dateien hochladen</h2>
      <div className="file-input-container">
        <input
          id="file-input"
          type="file"
          onChange={handleFileSelect}
        />
        <label htmlFor="file-input" className="custom-file-input">
          <FontAwesomeIcon icon={faCloudUploadAlt} />
          <span>Datei auswählen</span>
        </label>
        {selectedFile && (
          <div className="file-name-display">
            {selectedFile.name}
          </div>
        )}
      </div>
      <button
        onClick={uploadFile}
        disabled={!selectedFile || uploading}
      >
        {uploading ? "Uploading..." : "Upload File"}
      </button>
      {uploadProgress > 0 && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${uploadProgress}%` }}
          ></div>
          <span>{Math.round(uploadProgress)}%</span>
        </div>
      )}
    </section>

    <section className="files-section">
      <h2>Meine Dateien</h2>
      <button className="refresh-button" onClick={fetchFiles}>
        <FontAwesomeIcon icon={faSyncAlt} /> Neu Laden
      </button>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : files.length === 0 ? (
        <div className="empty-state">
          <FontAwesomeIcon icon={faFolderOpen} />
          <p>Keine Dateien gefunden</p>
        </div>
      ) : (
        <ul className="file-list">
          {files.map((file) => (
            <li key={file.key} className="file-item">
              <div className="file-info">
                <span className="file-name">
                  <FontAwesomeIcon
                    icon={faFile}
                    style={{ marginRight: "10px", color: "#5f72bd" }}
                  />
                  {file.key}
                </span>
                {file.size !== undefined && (
                  <span className="file-size">
                    {formatFileSize(file.size)}
                  </span>
                )}
              </div>
              <div className="file-actions">
                <button onClick={() => downloadFile(file.key)}>
                  <FontAwesomeIcon icon={faDownload} /> Herunterladen
                </button>
                <button onClick={() => deleteFile(file.key)}>
                  <FontAwesomeIcon icon={faTrashAlt} /> Löschen
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  </div>
  );
};

export default FileStorage;



