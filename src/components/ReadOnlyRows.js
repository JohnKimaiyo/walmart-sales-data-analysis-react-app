import React from "react";

const ReadOnlyRow = ({ sale, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{sale.shipping}</td>
      <td>{sale.department}</td>
      <td>{sale.category}</td>
      <td>{sale.productname}</td>
      <td>{sale.brand}</td>
      <td>{sale.sales}</td>
      <td>{sale.date}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, sale)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(sale.index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;