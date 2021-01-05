import React from "react";
import { Checkbox, Row, Col } from "antd";

function Checkboxfeature() {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
    <div>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={12}>
            <Checkbox value="Protien">Protien</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Fat">Fat</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Fibre">Fibre</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Carbs">Carbs</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="Cal">Cal</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  );
}

export default Checkboxfeature;
