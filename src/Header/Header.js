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
            A Power BI dashboard which allows me to filter data for each
            Product
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
            A Power BI dashboard which allows me to filter data for each
            Brand
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of  Sales per  Department</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each Department
          </td>
        </tr><tr>
          <td>Sales Representative</td>
          <td>A detailed overview of  Sales per  Category</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each Category
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
          <td>Visualised Data</td>
          <td>PDF file containing the Sales Visualised Data</td>

          <td>
            <a
              href="https://github.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/blob/main/src/Visual%20Report/Walamart%20Sales%20Analysis.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Dashboard Here
            </a>
          </td>
        </tr>
        <tr>
          <td>Visualised Data</td>
          <td>PDF file containing the Sales Visualised Data</td>

          <td>
            <a
              href="https://github.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/blob/main/src/Visual%20Report/Walamart%20Sales%20Analysis.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Dashboard Here
            </a>
          </td>
        </tr>
        <tr>
          <td>SQL Queries</td>
          <td>Checkout sql statement to clean up the data</td>
          <td>
            <a
              href="https://github.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/tree/main/src/Visual%20Report"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view the SQL scripts
            </a>
          </td>
        </tr>
        <tr>
          <td>Walmart Source Files </td>
          <td>Walmart Kaggle dataset</td>
          <td>
            <a
            
              href="https://github.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/tree/main/src/Visual%20Report"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to down load the source files from kaggle
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
