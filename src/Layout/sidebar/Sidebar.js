import React from "react";
import { FiShoppingCart, FiPieChart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  FiFile,
  FiShoppingBag,
  FiMonitor,
  FiBarChart,
  FiUsers,
  FiArchive,
  FiSettings,
  FiTag,
  FiFilm,
  FiList,
} from "react-icons/fi";
import "./style.css";
function Sidebar() {
  return (
        <nav
          id="sidebarMenu"
          className="col-md-2 col-xl-2 col-lg-2 d-md-block bg-white mt-4 side collapse"
        >
          <div className="sidebar-sticky pt-3 ">
            <ul className="nav flex-column nav-tabs">
              <li className="nav-item active">
                <NavLink className="NavLink active" exact to={`/`}>
                  <FiMonitor className="sidebar_icon" /> Dashboard
                </NavLink>
                <span className="sr-only">(current)</span>
              </li>

              {/* <li className="nav-item">
                <NavLink className="NavLink" to={`/Banners`}>
                  <FiFilm className="sidebar_icon" />
                  Banners
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="NavLink" to={`/AddCat`}>
                  <FiPieChart className="sidebar_icon" />
                  Add Category
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="NavLink" to={`/Product`}>
                  <FiShoppingBag className="sidebar_icon" />
                  Add Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="NavLink" to={`/AddCoupon`}>
                  <FiTag className="sidebar_icon" />
                  Add Coupon
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="NavLink" to={`/AddExpenses`}>
                  <FiShoppingBag className="sidebar_icon" />
                  Add Expenses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/AddTax`}>
                  <FiArchive className="sidebar_icon" />
                  Add Tax
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="NavLink" to={`/Customers`}>
                  <FiUsers className="sidebar_icon" />
                  Add Customers
                </NavLink>
              </li> */}
              {/* 
              <li className="dropdown">
                <NavLink
                  to={`/Product`}
                  className="dropdown-toggle NavLink"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {" "}
                  <span className="nav-label">
                    {" "}
                    <FiShoppingBag className="sidebar_icon" />
                    Products
                  </span>
                  <span className="caret"></span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink className="NavLink" to={`/Pro`}>
                      <FiShoppingBag className="sidebar_icon" />
                      Pro
                    </NavLink>
                  </li>
                </ul>
              </li> */}
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a
                className="d-flex align-items-center text-muted"
                href="#"
                aria-label="Add a new report"
              >
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink className="NavLink" to={`/CategoryList`}>
                  <FiList className="sidebar_icon" />
                  Category List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/Pro`}>
                  <FiShoppingBag className="sidebar_icon" />
                  Products List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/Orderlist`}>
                  <FiShoppingCart className="sidebar_icon" />
                  Orders List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/CouponList`}>
                  <FiTag className="sidebar_icon" />
                  Coupon List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/Expenselist`}>
                  <FiShoppingBag className="sidebar_icon" />
                  Expense List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/TaxList`}>
                  <FiArchive className="sidebar_icon" />
                  Tax List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="NavLink" to={`/Userlist`}>
                  <FiUsers className="sidebar_icon" />
                  Users
                </NavLink>
              </li>
              <br />
            </ul>
          </div>
        </nav>
    
  );
}

export default Sidebar;
