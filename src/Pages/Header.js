import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <h2>Walmart Sales Business Requests</h2>

      <table>
        <tr>
          <th>Job Title</th>
          <th>Business Request</th>
          <th>User Value</th>
          <th>Acceptance Criteria</th>
        </tr>
        <tr>
          <td>Sales Manager</td>
          <td>To get a dashboard overview of Sales</td>
          <td>Can follow better which customers and products sells the best</td>
          <td></td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Product</td>
          <td>
            Can follow up my customers that buys the most and who we can sell
            ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each Product
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Brand</td>
          <td>
            Can follow up my customers that buys the most and who we can sell
            ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each Brand
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Department</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each
            Department
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Category</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each
            Category
          </td>
        </tr>
      </table>

      <h2>Download Links Section</h2>
      <table>
        <tr>
          <th>Page Routes </th>
          <th>Description of the Pages</th>
          <th>URL Links</th>
        </tr>
        <tr>
          <td>JPEG Visualised Data</td>
          <td>Image file containing the Sales Visualised Data</td>

          <td>
           
          </td>
        </tr>
        <tr>
          <td>Googlesheet Visualised Data</td>
          <td>Image containing the Sales Visualised Data in Googlesheet</td>

          <td>
           
          </td>
        </tr>
        <tr>
          <td>PDF Visualised Data</td>
          <td>PDF file containing the Sales Visualised Data</td>

          <td>
            
          </td>
        </tr>
        <tr>
          <td>SQL Queries</td>
          <td>Checkout sql statement to clean up the data</td>
          <td>
           
          </td>
        </tr>
        <tr>
          <td>Walmart Source Files </td>
          <td>Walmart Kaggle Dataset</td>
          <td>
          
          </td>
        </tr>
        <tr>
          <td>Walmart JSON Files </td>
          <td>Walmart JSON Dataset</td>
          <td>
          
          </td>
        </tr>
        <tr>
          <td>Create JSON Files </td>
          <td>Check out my Excel to JSON Converter app</td>
          <td>
          
          </td>
        </tr>
      </table>
    </div>
  );
}
