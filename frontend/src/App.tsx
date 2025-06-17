// src/App.tsx
import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import SafetyTable from "./components/SafetyTable";
import AECharts from "./components/AECharts";

const App: React.FC = () => {
  const [tableData, setTableData] = useState<Record<string, string | number>[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Clinical Safety Table Viewer
      </h1>
      <UploadForm onDataLoaded={setTableData} />
      <SafetyTable data={tableData} />
      <AECharts data={tableData} />
    </div>
  );
};

export default App;