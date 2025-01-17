// components/CropTable/CropTable.tsx
import React from 'react';

interface TableProps {
  rows: Array<Record<string, string | number>>; // Array of objects where each object can have string or number values
  headers: string[]; // Array of strings for headers
}

function Table({ rows, headers }: TableProps) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        {headers && headers.length > 0 && (
          <thead className="thead-dark">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
