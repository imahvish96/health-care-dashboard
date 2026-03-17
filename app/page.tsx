"use client";
import Cards from "./components/Cards";
import Chart from "./components/AreaChart";
import PatientTable from "./components/PatientTable";
import { kpiCards } from "./config";

export default function Home() {
  return (
    <main className="px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card, index) => (
          <Cards key={index} card={card} index={index} />
        ))}
      </div>
      <Chart />
      <PatientTable />
    </main>
  );
}
