import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Icofont from "react-icofont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function AddAddressModal(props) {
  const [result, setResult] = useState({
    userId: "",
    address: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });
  const handleChange = (event) => {
    setResult({ ...result, [event.target.name]: event.target.value });
  };

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://apis.restroqr.link:4040/Address", result)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton={true}>
          <Modal.Title id="add-address">
            <div class="card-body text-center mb-5">
              {" "}
              <img
                src="https://i.imgur.com/7ElCsL1.png"
                height="200"
                width="200"
                margin="30%"
              />
              <h5 class="mt-1 text-center">Add Delivery Address</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-row">
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={result.address}
                  onChange={handleChange}
                  placeholder="Address Detail"
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="pincode"
                  value={result.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="state"
                  value={result.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="number"
                  name="phoneNumber"
                  value={result.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <div className="row">
            <Button
              type="button"
              onClick={props.onHide}
              variant="outline"
              className="d-flex w-50 text-center justify-content-center"
            >
              CANCEL
            </Button>
            <Button
              type="button"
              className="d-flex w-50 text-center justify-content-center cart-btn"
              onClick={(e) => submit(e)}
            >
              SUBMIT
            </Button>
            <ToastContainer />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddAddressModal;
