import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../Reducer/slice/VehicleItem';
import { removeEquipmentItem  } from '../../../Reducer/slice/EquipmentItem';
import { removeCropItem  } from '../../../Reducer/slice/CropItem';
import { removeFieldItem  } from '../../../Reducer/slice/FieldItem';
import { removeStaffItem  } from '../../../Reducer/slice/StaffItem';
import { removeLogItem  } from '../../../Reducer/slice/LogItem';



interface TableProps<T extends { id: string | number }> {
  rows: Array<T>;
  headers: string[];
  onEdit: (item: T) => void;
}

const Table = <T extends { id: string | number }>({ rows, headers, onEdit }: TableProps<T>) => {
  const dispatch = useDispatch();

  const handleEdit = (item: T) => {
    onEdit(item); 
  };

  const handleDelete = (id: string | number) => {
    dispatch(removeItem(id)); 
    dispatch(removeEquipmentItem(id));
    dispatch(removeCropItem(id));
    dispatch(removeFieldItem(id));
    dispatch(removeStaffItem(id));
    dispatch(removeLogItem(id));
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
                    onClick={() => handleDelete(row.id)}
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
};

export default Table;
