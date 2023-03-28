import React from "react";
import "./Pages.css";
export default function JSON() {
  return (
    <div className="App">
      JSON
      <a
        href="https://raw.githubusercontent.com/JohnKimaiyo/walmart-sales-data-analysis-react-app/main/src/Search%20App/wamart.json"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to down load the JSON file
      </a>
      <a
        href="https://excel-to-json-javascript-converter.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to convert Excel data to JSON Data
      </a>
    </div>
  );
}
