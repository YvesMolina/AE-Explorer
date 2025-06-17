// src/components/UploadForm.tsx
import React, { useState } from "react";

type Props = {
  onDataLoaded: (data: any[]) => void;
};

const UploadForm: React.FC<Props> = ({ onDataLoaded }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    onDataLoaded(json);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded bg-white shadow">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload CSV
      </button>
    </div>
  );
};

export default UploadForm;
