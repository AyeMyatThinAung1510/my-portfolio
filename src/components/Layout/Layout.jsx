import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, className }) => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <div className="layout-container">
            <Sidebar />
          </div>
        </Col>
        <Col md={9}>
          <div className={`layout ${className}`}>{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
