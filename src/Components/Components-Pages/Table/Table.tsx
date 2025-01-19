import React from 'react';
import { useDispatch } from 'react-redux';
import ModalPage from '../Modal/modalPage';
import { removeItem } from '../../../Reducer/slice/VehicleItem';
import { VehicleData } from '../../../models/VehicleData';

interface TableProps {
  rows: Array<VehicleData>;
  headers: string[];
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleModalShow: () => void;
}

function Table({ rows, headers, setFormData, handleModalShow }: TableProps) {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleEdit = (vehicle: VehicleData) => {
    setFormData(vehicle);
    handleModalShow();
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        {headers && headers.length > 0 && (
          <thead className="thead-dark">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
              <td>
                <div className="action-btns">
                  <button
                    className="btn btn-link text-warning p-0 me-2 edit-btn"
                    onClick={() => handleEdit(row)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-link text-danger p-0 delete-btn"
                    onClick={() => handleDelete(row.id as string)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
