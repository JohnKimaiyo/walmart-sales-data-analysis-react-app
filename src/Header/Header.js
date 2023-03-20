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
          <td>A Power BI dashboard which updates data once a day</td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Internet Sales per Customers</td>
          <td>
            Can follow up my customers that buys the most and who we can sell
            ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each
            customer
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Internet Sales per Products</td>
          <td>Can follow up my Products that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each Product
          </td>
        </tr>
      </table>
      <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1ETQQwPaX8kMLgqIBLBulHTQiVk_nMf0rXOLxm4UnLko/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the Dashboard Here
        </a>
    </div>
  );
}
