import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/EdittableRow";
import EditableRow from "./components/ReadOnlyRows";

const App = () => {
  const [walmart, setWalmart] = useState(data);
  const [addFormData, setAddFormData] = useState({
    shipping: "",
    department: "",
    category: "",


    productname: "",
    brand: "",
    sales: "",
    date: '',



  });

  const [editFormData, setEditFormData] = useState({
    shipping: "",
    department: "",
    category: "",

    productname: "",
    brand: "",
    sales: "",
    date: '',
  });

  const [editSaleIndex, setEditSaleIndex] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newWalmart = {
      id: nanoid(),
      shipping: addFormData.shipping,
      category: addFormData.category,
      productname: addFormData.productname,
      brand: addFormData.brand,
      sales: addFormData.sales,
      date: addFormData.date,

    };

    const newWalmarts = [...walmart, newWalmarts];
    setWalmarts(newWalmarts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editeWalmart = {
      id: editWalmartId,
      shipping: editFormData.shipping,
      category: editFormData.category,
      productname: editFormData.productname,
      brand: editFormData.brand,
      sales: editFormData.sales,
      date: editFormData.date,

    };

    const newWalamrt = [...walmart];

    const index = walmarts.findIndex((walmart) => walamrt.id === editWalamrtId);

    newWalmarts[index] = editedWalmart;

    setWalmarts(newWalmarts);
    setEditWlamartsId(null);
  };

  const handleEditClick = (event, walmart) => {
    event.preventDefault();
    setEditSaleIndex(Walmart.id);

    const formValues = {
      shipping: walmart.shipping,
      department: walmartdepartment,
      category: walmart.catgory,
      productname: walmart.productname,
      brand: walmart.brand,
      sales: walmart.sales,
      date: walmart.date,

    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditSaleIndex(null);
  };

  const handleDeleteClick = (walmartId) => {
    const newSales = [...walmarts];

    const index = sales.findIndex((walmart) =>walmart.index === saleIndex);

    newwalmart.splice(index, 1);

    setwalmart(newwalmart);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Shipping</th>
              <th>Department</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Sales</th>
              <th>Date</th>

            </tr>
          </thead>
          <tbody>
            {walmart.map((sale) => (
              <Fragment>
                {editwalmartIndex === walmart.index ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    sales={walmart}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Sales</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="number"
          name="shipping"
          required="required"
          placeholder="Enter shipping..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="department"
          required="required"
          placeholder="Enter department..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="category"
          required="required"
          placeholder="Enter category..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="productname"
          required="required"
          placeholder="Enter productname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="brand"
          required="required"
          placeholder="Enter brand..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="sales"
          required="required"
          placeholder="Enter sales amount..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;