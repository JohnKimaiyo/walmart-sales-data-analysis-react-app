import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [sales, setSales] = useState(data);
  const [addFormData, setAddFormData] = useState({
    shipping: "",
    department: "",
    category: "",
    email: "",
    category: '',
    productName: "",
    brand: "",
    sales: "",
    date: '',



  });

  const [editFormData, setEditFormData] = useState({
    shipping: "",
    department: "",
    category: "",
    email: "",
    category: '',
    productName: "",
    brand: "",
    sales: "",
    date: '',
  });

  const [editSalesIndex, setEditSalesId] = useState(null);

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

    const newSales = {
      index: nanoid(),
      shipping: addFormData.shipping,
      category: addFormData.category,
      productname: addFormData.productname,
      brand: addFormData.brand,
      sales: addFormData.sales,
      date: addFormData.date,

    };

    const newContacts = [...sales, newSales];
    setSales(newSales);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedSales = {
      index: editSalesIndex,
      shipping: editFormData.shipping,
      category: editFormData.category,
      productname: editFormData.productname,
      brand: editFormData.brand,
      sales: editFormData.sales,
      date: editFormData.date,

    };

    const newSales = [...sales];

    const index = sales.findIndex((sales) => sales.idex === editSalesIndex);

    newSales[index] = editedSales;

    setSales(newSales);
    setEditSalesIndex(null);
  };

  const handleEditClick = (event, sales) => {
    event.preventDefault();
    setEditSalesIndex(sales.index);

    const formValues = {
      shipping: sales.shipping,
      department: sales.department,
      category: sales.catgory,
      productname: sales.productname,
      brand: sales.brand,
      sales: sales.sales,
      date: sales.date,

    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (salesIndex) => {
    const newSales = [...sales];

    const index = sales.findIndex((sales) => sales.index === salesIndex);

    newSales.splice(index, 1);

    setSales(newSales);
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
            {sales.map((sales) => (
              <Fragment>
                {editSalesIndex === sales.index ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    sales={sales}
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