import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./style.css";
function Crumb() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item className="breadcrumbs" href="/">Order</Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumbs" active>Meal</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Crumb;
