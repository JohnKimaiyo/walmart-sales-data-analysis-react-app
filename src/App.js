import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import BusinessRequest from "./Pages/BusinessRequest";
import PowerBIDashboard from "./Pages/PowerBIDashboard";
import GoogleSheet from "./Pages/GoogleSheetDashbaord";
import ExcelSheetDashboard from "./Pages/ExcelSheetDashboard";
import SQL from "./Pages/SQL";
import JSON from "./Pages/JSON";
import SourceFiles from "./Pages/SourceFiles";
import NoPage from "./Pages/NoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BusinessRequest />} />
          <Route path="PowerBIDashboard" element={<PowerBIDashboard />} />
          <Route path="GoogleSheet" element={<GoogleSheet />} />
          <Route path="ExcelSheetDashboard" element={<ExcelSheetDashboard />} />

          <Route path="SQL" element={<SQL />} />

          <Route path="JSON" element={<JSON />} />
          <Route path="SourceFiles" element={<SourceFiles />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
