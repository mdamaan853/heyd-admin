import React, { useState } from "react";
// import { FiLogOut } from "react-icons/fi";
import { AiTwotoneHome } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function NavbarMenu() {
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="shadow bg-white p-3 mb-1 "
      >
        <div className="container-fluid">
          <Navbar.Brand href="/">Heydgreen</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="link mr-2" to={"/"}>
                {/* <AiTwotoneHome color="#FFC91E" siz="15" /> */}
                Home
              </Link>
              <Link to={"/myaccount/"} className="link mr-2">
                Account
              </Link>
            </Nav>
            <Nav>
              <Link className="link mr-2 pr-3" to={`/cart/`}>
                {/* <FiShoppingCart color="#FFC91E" siz="15" /> */}
                Cart
              </Link>
              <Link className="link" onClick={handleShow}>
                {/* <FiUser color="#FFC91E" siz="15" /> */}
                Login
              </Link>
              <Modal
                dialogClassName="my-modal"
                aria-labelledby="example-custom-modal-styling-title"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    HEYDGREEN
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PhoneInput
                    national
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    value={value}
                    onChange={setValue}
                    placeholder="Enter your number"
                  />
                  <div className="form">
                    <input
                      type="text"
                      id="form2"
                      className="form-control border-0"
                      placeholder="Enter otp"
                    />
                    <br />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="modal-button mx-auto border-0">
                    Continue
                  </Button>
                </Modal.Footer>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
