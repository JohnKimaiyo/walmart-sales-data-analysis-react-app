import React from "react";

const ReadOnlyRow = ({ walmart, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{walmart.shipping}</td>
      <td>{walmart.department}</td>
      <td>{walmart.category}</td>
      <td>{walmart.productname}</td>
      <td>{walmart.brand}</td>
      <td>{walmart.sales}</td>
      <td>{walmart.date}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, walmart)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(walmart.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;