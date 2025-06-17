// src/components/SafetyTable.tsx
import React from "react";

type Props = {
  data: Record<string, string | number>[];
};

const SafetyTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 border">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="bg-white even:bg-gray-100">
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 border text-sm">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SafetyTable;
