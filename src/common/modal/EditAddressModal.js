// {
/* <Modal show={props.show} onHide={props.onHide} centered>
<Modal.Header closeButton={true}>
  <Modal.Title as="h5" id="add-address">
    Update Delivery Address
  </Modal.Title>
</Modal.Header>
<Modal.Body>
  <input
    className="input"
    type="text"
    name="address"
    value={result.address}
    onChange={handleChange}
    placeholder="Address"
  />
  <input
    className="input"
    type="text"
    name="pincode"
    value={result.pincode}
    onChange={handleChange}
    placeholder="Pincode"
  />
  <input
    className="input"
    type="text"
    name="state"
    value={result.state}
    onChange={handleChange}
    placeholder="state"
  />
  <input
    className="input"
    type="number"
    name="phoneNumber"
    value={result.phoneNumber}
    onChange={handleChange}
    placeholder="phoneNumber"
  />
</Modal.Body>

<Modal.Footer>
  <Button
    type="button"
    onClick={props.onHide}
    variant="outline-primary"
    className="d-flex w-50 text-center justify-content-center"
  >
    CANCEL
  </Button> */
// }

import React, { Component } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
// import Icofont from "react-icofont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect, Switch } from "react-router-dom";
import axios from "axios";
class EditAddressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userId: "",
      address: [],
      pincode: "",
      state: "",
      phoneNumber: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    axios.get(`http://apis.restroqr.link:4040/Address/${id}`).then(
      (res) => {
        console.log(res);
        this.setState({
          id: res.data.result.id,
          address: res.data.result.address,
          userId: res.data.result.userId,
          state: res.data.result.state,
          phoneNumber: res.data.result.phoneNumber,
          pincode: res.data.result.pincode,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }

  FormSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();

    fd.append("address", this.state.address);
    fd.append("userId", this.state.userId);
    fd.append("state", this.state.state);
    fd.append("phoneNumber", this.state.phoneNumber);
    fd.append("pincode", this.state.pincode);
    axios
      .patch("http://apis.restroqr.link:4040/Address/" + this.state.id, fd, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast("updated successfully!");
        <Switch>
          <Redirect to="/myaccount/address" />
        </Switch>;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={10} className="mt-4">
              <form className=" w-100 mt-5 ">
                <div className="form-row">
                  <Form.Control
                    type="text"
                    className="input"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder="Address Detail"
                  />

                  <Form.Control
                    type="text"
                    name="pincode"
                    className="input"
                    value={this.state.pincode}
                    onChange={this.handleChange}
                    placeholder="Pincode"
                  />
                  <Form.Control
                    type="text"
                    name="state"
                    className="input"
                    value={this.state.state}
                    onChange={this.handleChange}
                    placeholder="state"
                  />

                  <Form.Control
                    type="number"
                    className="input w-60"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    placeholder="phoneNumber"
                  />
                  <Button
                    type="button"
                    className="btn-block mx-auto mt-5 d-flex justify-content-center"
                    onClick={this.FormSubmit}
                  >
                    UPDATE
                  </Button>
                  <ToastContainer />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default EditAddressModal;
