import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Order from "./Order";
const GetOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://apis.restroqr.link:4040/order");
      console.log(res);
      setOrders(res.data.result);
    };

    fetch();
  }, []);
  return (
    <>
      <div className="p-4 bg-white shadow-sm">
        <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
        {orders.map((result, i) => (
          <Col md={12} key={result.id}>
            <Order result={result} />
          </Col>
        ))}
      </div>
    </>
  );
};
export default GetOrders;
