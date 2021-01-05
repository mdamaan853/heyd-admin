import React, { useState } from "react";
import EditProfileModal from "../../common/modal/EditProfileModal";
import { FcEditImage } from "react-icons/fc";
import { Switch, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import GetAddress from "./GetAddress";
import GetOrders from "./GetOrders";
import GetCoupon from "./GetCoupon";
const UserAcount = () => {
  const [showEditProfile, setshowEditProfile] = useState(false);
  const handlehideEditProfile = () => setshowEditProfile(false);
  const handleShowEditProfile = () => setshowEditProfile(true);

  return (
    <>
      <EditProfileModal show={showEditProfile} onHide={handlehideEditProfile} />
      <section className="section pt-4 pb-4 osahan-account-page">
        <Container>
          <Row>
            <Col md={3}>
              <div className="osahan-account-page-left shadow-sm bg-white h-100">
                <div className="border-bottom p-4">
                  <div className="osahan-user text-center">
                    <div className="osahan-user-media">
                      <Image
                        className="mb-3 rounded-pill shadow-sm mt-1"
                        src="/img/user/4.png"
                        // alt={result.name}
                      />
                      <div className="osahan-user-media-body">
                        <h6 className="mb-2">Gurdeep Singh</h6>
                        <p className="mb-1">+91 85680-79956</p>
                        <p>iamosahan@gmail.com</p>
                        <p className="mb-0 text-black font-weight-bold">
                          <Link
                            to="#"
                            onClick={handleShowEditProfile}
                            className="text-primary mr-3"
                          >
                            <FcEditImage size={18} /> EDIT
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                  <li className="nav-item">
                    <NavLink
                      className="user-link"
                      activeClassName="active"
                      exact
                      to="/myaccount/orders"
                    >
                      <i className="icofont-food-cart"></i> Orders
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="user-link"
                      activeClassName="active"
                      exact
                      to="/myaccount/offers"
                    >
                      <i className="icofont-sale-discount"></i> Offers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="user-link"
                      activeClassName="active"
                      exact
                      to="/myaccount/payments"
                    >
                      <i className="icofont-credit-card"></i> Payments
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="user-link"
                      activeClassName="active"
                      exact
                      to="/myaccount/address"
                    >
                      <i className="icofont-location-pin"></i> Addresses
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={9}>
              <Switch>
                <Route path="/myaccount/orders" exact component={GetOrders} />
                <Route path="/myaccount/offers" exact component={GetCoupon} />
                {/* <Route path="/myaccount/favourites" exact component={Favourites} /> */}
                {/* <Route path="/myaccount/payments" exact component={Payments} />  */}
                <Route path="/myaccount/address" exact component={GetAddress} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserAcount;
