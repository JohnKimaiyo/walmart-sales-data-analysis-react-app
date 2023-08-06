import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>

      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter shipping number ..."
          name="shipping"
          value={editFormData.shipping}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an  department..."
          name="department"
          value={editFormData.department}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a category..."
          name="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter productname..."
          name="productname"
          value={editFormData.productname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter brand..."
          name="brand"
          value={editFormData.brand}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter sales..."
          name="sales"
          value={editFormData.sales}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;