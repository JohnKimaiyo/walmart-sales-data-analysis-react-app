import React from "react";
import Data from "./Data/data.csv";
import Papa from "papaparse";
export default function Render() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}
      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Shipping</th>
              <th>Department</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price Retail</th>
              <th>Price Current</th>
              <th>Product Size</th>
              <th>Promotion</th>
              <th>tid</th>
              <th>Sales</th>
              <th>Date</th>
              <th>Budgeted Sales</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.Index}</td>
                <td>{row.Shipping}</td>
                <td>{row.Occupation}</td>
                <td>{row.Category}</td>
                <td>{row.Age}</td>
                <td>{row.Occupation}</td>
                <td>{row.Name}</td>
                <td>{row.Age}</td>
                <td>{row.Occupation}</td>
                <td>{row.Name}</td>
                <td>{row.Age}</td>
                <td>{row.Occupation}</td>
                <td>{row.Age}</td>
                <td>{row.Occupation}</td>
                <td>{row.Name}</td>
                <td>{row.Age}</td>
                <td>{row.Occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <br />
      <br />~ webstylepress ~
    </div>
  );
}
