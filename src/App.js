import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/EdittableRow";
import EditableRow from "./components/ReadOnlyRows";

const App = () => {
  const [sales, setSales] = useState(data);
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

    const newSale = {
      index: nanoid(),
      shipping: addFormData.shipping,
      category: addFormData.category,
      productname: addFormData.productname,
      brand: addFormData.brand,
      sales: addFormData.sales,
      date: addFormData.date,

    };

    const newSales = [...sales, newSale];
    setSales(newSales);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedSale = {
      index: editSaleIndex,
      shipping: editFormData.shipping,
      category: editFormData.category,
      productname: editFormData.productname,
      brand: editFormData.brand,
      sales: editFormData.sales,
      date: editFormData.date,

    };

    const newSales = [...sales];

    const index = sales.findIndex((sale) => sale.index === editSaleIndex);

    newSales[index] = editedSale;

    setSales(newSales);
    setEditSaleIndex(null);
  };

  const handleEditClick = (event, sale) => {
    event.preventDefault();
    setEditSaleIndex(sales.index);

    const formValues = {
      shipping: sale.shipping,
      department: sale.department,
      category: sale.catgory,
      productname: sale.productname,
      brand: sale.brand,
      sales: sale.sales,
      date: sale.date,

    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditSaleIndex(null);
  };

  const handleDeleteClick = (saleIndex) => {
    const newSales = [...sales];

    const index = sales.findIndex((sale) => sales.index === saleIndex);

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
            {sales.map((sale) => (
              <Fragment>
                {editSaleIndex === sales.index ? (
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