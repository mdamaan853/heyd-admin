import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";
import CategoryList from "./components/products/CategoryList";
import AddCat from "./components/products/AddCat";
import Orderlist from "./components/Orders/Orderlist";
import UploadProduct from "./components/products/UploadProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Pro from "./components/products/Pro";
import AddTax from "./components/tax/AddTax";
import TaxList from "./components/tax/TaxList";
import UpdateTax from "./components/tax/UpdateTax";
import UpdateCat from "./components/products/updateCat";
import AddCoupon from "./components/coupons/AddCoupon";
import CouponList from "./components/coupons/CouponList";
import UpdateCoupon from "./components/coupons/UpdateCoupon";
import AddExpenses from "./components/Expenses/AddExpense";
import Expenselist from "./components/Expenses/Expenselist";
import UpdateExpense from "./components/Expenses/UpdateExpense";
import Userlist from "./components/users/Userlist";
import "./App.css";
// import UpdateUser from './components/users/UpdateUser';
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/CategoryList" component={CategoryList} />
        <Route path="/AddCat" component={AddCat} />
        <Route path="/Orderlist" component={Orderlist} />
        <Route path="/Product" component={UploadProduct} />
        <Route path="/TaxList" component={TaxList} />
        <Route
          path="/updateTax/:id"
          render={(props) => <UpdateTax {...props} />}
        ></Route>
                <Route
          path="/updateCat/:id"
          render={(props) => <UpdateCat {...props} />}
        ></Route>
        <Route path="/AddTax" component={AddTax} />
        <Route path="/Pro" component={Pro} />
        <Route
          path="/updateProduct/:id"
          render={(props) => <UpdateProduct {...props} />}
        ></Route>
        <Route path="/AddCoupon" component={AddCoupon} />
        <Route path="/CouponList" component={CouponList} />
        <Route
          path="/updateCoupon/:id"
          render={(props) => <UpdateCoupon {...props} />}
        ></Route>
        <Route path="/AddExpenses" component={AddExpenses} />
        <Route path="/Expenselist" component={Expenselist} />
        <Route
          path="/updateExpense/:id"
          render={(props) => <UpdateExpense {...props} />}
        ></Route>
        <Route path="/Userlist" component={Userlist} />
        {/* <Route path="/updateUsers/:id" render= {props=>(<UpdateUser {...props}/>)}></Route> */}
        {/* <Route  path ="/" component={} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
