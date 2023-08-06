import React from "react";

const ReadOnlyRow = ({ sales, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.shipping}</td>
      <td>{contact.deaprtment}</td>
      <td>{contact.category}</td>
      <td>{contact.productname}</td>
      <td>{contact.brand}</td>
      <td>{contact.sales}</td>
      <td>{contact.date}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, sales)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(sales.index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;