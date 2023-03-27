import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">BusinessRequest</Link>
          </li>
          <li>
            <Link to="/PowerBIDashboard">PowerBIDashboard</Link>
          </li>
          <li>
            <Link to="/GoogleSheetDashboard">GoogleSheetDashboard</Link>
          </li>
          <li>
            <Link to="/ExcelSheetDashboard">ExcelSheetDashboard</Link>
          </li>
          <li>
            <Link to="/SQL">SQL</Link>
          </li>
          <li>
            <Link to="/SourceFiles">SourceFiles</Link>
          </li>
          <li>
            <Link to="/JSON">JSON</Link>
          </li>
          <li>
            <Link to="/NoPage">NoPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
