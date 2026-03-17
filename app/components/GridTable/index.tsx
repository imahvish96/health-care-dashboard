import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function GridTable() {
  const [rowData] = useState([
    { name: "John", status: "Stable", age: 45 },
    { name: "Maria", status: "Critical", age: 60 },
    { name: "Adam", status: "Warning", age: 50 },
  ]);

  const [columnDefs] = useState([
    { field: "name" },
    { field: "status" },
    { field: "age" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 400 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}
