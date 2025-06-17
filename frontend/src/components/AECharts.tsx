// src/components/AECharts.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: Record<string, string | number>[];
};

const AECharts: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) return null;

  // Example: Count by "Preferred Term"
  const frequencyMap: Record<string, number> = {};
  data.forEach((row) => {
    const term = String(row["Preferred Term"] || "Unknown");
    frequencyMap[term] = (frequencyMap[term] || 0) + 1;
  });

  const chartData = Object.entries(frequencyMap).map(([term, count]) => ({
    term,
    count,
  }));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Events by Preferred Term</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="term" angle={-45} textAnchor="end" interval={0} height={100} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AECharts;
