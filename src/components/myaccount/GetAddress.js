import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import AddAddressModal from "../../common/modal/AddAddressModal";
import AddressCard from "../../common/AddressCard";
const GetAddress = (result) => {
  const [address, setAddress] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://apis.restroqr.link:4040/Address");
      console.log(res);
      setAddress(res.data.result);
    };

    fetch();
  }, []);

  return (
    <>
      <div className="p-4 bg-white shadow-sm">
        <Row>
          <Col md={12}>
            <h4 className="font-weight-bold mt-0 mb-3">Manage Addresses</h4>
          </Col>
          {address.map((result) => (
            <Col md={6} key={result.id}>
              <AddressCard result={result} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            {/* <Button className="address-btn" onClick="">
              Add Address99999
            </Button> */}
            <button
              className="btn address-btn"
              onClick={() => setModalShow(true)}
            >
              Add Address
            </button>
            <AddAddressModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default GetAddress;
