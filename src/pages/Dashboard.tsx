import {  Routes, Route, Navigate } from "react-router";
import Sidebar from "./../components/Sidebar";
import Store from "./Store";
import SKU from "./SKU";
import Planning from "./Planning";
import Chart from "./Chart";
const Dashboard = () => {
  return (
      <div className="d-flex">
        <Sidebar />
        <div className="content p-4">
          <Routes>
          <Route index element={<Navigate to="store" replace />} />
            <Route path="store" element={<Store />} />
            <Route path="sku" element={<SKU />} />
            <Route path="planning" element={<Planning />} />
            <Route path="charts" element={<Chart />} />
          </Routes>
        </div>
      </div>
  )
}

export default Dashboard