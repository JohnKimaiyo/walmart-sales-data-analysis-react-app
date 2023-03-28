import React from "react";
import "./Pages.css";
export default function Home() {
  return (
    <div className="App">
      <div>
        <h2>Walmart Sales Insights Analysis</h2>

        <table>
          <tr>
            <th>Page Routes </th>

            <th>URL Links</th>
          </tr>
          <tr>
            <td>Business Request</td>
            <td>
              {" "}
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
            <td>Power BI Dashboard</td>
            <td>
              {" "}
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
            <td>Googlesheet Visualised Data</td>
            <td>
              {" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1MKxM4zOPpnTVzHr1fEPb6r34Af3maUZgmDuAUo7GVCo/edit#gid=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the Dashboard Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Excel Sheet Dashbaord</td>
            <td></td>
          </tr>
          <tr>
            <td>SQL Queries</td>
            <td>
              {" "}
              <a
                href="https://github.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/blob/main/src/SQL%20Scripts/walmart.sql"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to view the SQL scripts
              </a>
            </td>
          </tr>
          <tr>
            <td>Walmart Source Files </td>
            <td>
              {" "}
              <a
                href="https://github.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/tree/main/src/Visual%20Report"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to down load the source files from kaggle
              </a>
            </td>
          </tr>
          <tr>
            <td>Walmart JSON Files </td>
            <td>
              <a
                href="https://raw.githubusercontent.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/main/src/Search%20App/wamart.json"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to down load the JSON file
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
