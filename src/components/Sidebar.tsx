import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import { FaStore, FaBox, FaChartBar, FaTable } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(location.pathname);
   console.log(activeKey)
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/dashboard/store"
            active={activeKey === "/dashboard/store"}
            onClick={() => setActiveKey("/dashboard/store")}
          >
            <FaStore className="me-2" /> Store
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/dashboard/sku"
            active={activeKey === "/dashboard/sku"}
            onClick={() => setActiveKey("/dashboard/sku")}
          >
            <FaBox className="me-2" /> SKU
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/dashboard/planning"
            active={activeKey === "/dashboard/planning"}
            onClick={() => setActiveKey("/dashboard/planning")}
          >
            <FaChartBar className="me-2" /> Planning
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/dashboard/charts"
            active={activeKey === "/dashboard/charts"}
            onClick={() => setActiveKey("/dashboard/charts")}
          >
            <FaTable className="me-2" /> Charts
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
