import React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarMenu from "./Myntra/Navbar";
import PostData from "./axios/PostData";
import ProductDetail from "./components/productsdetails/ProductDetail";
import Cart from "./components/cart/Cart";
import Footer from "./common/Footer";
import Login from "./components/login/Login";
import UserAcount from "./components/myaccount/UserAcount";
import EditAddressModal from "./common/modal/EditAddressModal";
// import NotFound from "./NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Route path="/" component={PostData} exact />
      <Route path="/product/:id" component={ProductDetail} />
      {/* <Route path="/404" exact component={NotFound} /> */}
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/myaccount" component={UserAcount} />
      {/* <Route path="/update/:id" component={EditAddressModal} /> */}
      <Route
        path="/update/:id"
        render={(props) => <EditAddressModal {...props} />}
      />
      {/* <AddProduct /> */}
      {/* <Route exact component={NotFound} /> */}
      <Footer />
    </Router>
  );
}

export default App;
