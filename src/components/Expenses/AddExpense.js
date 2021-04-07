import { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"
import "./style.css";
import { url } from "../../url";
class AddExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      supplierName: "",
      supplierAddress: "",
      supplierGST: "",
      products: "",
      date: "",
      total: "",
      tax: "",
      grandTotal: "",
      paymentMode: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(url+`expenses/`, this.state)
      .then((res) =>this.props.history.push('/Expenselist'),
       toast.success("added successfully!"))
      .catch((err) => console.log(err));
  };
  render() {
    const {
      supplierName,
      supplierAddress,
      supplierGST,
      products,
      date,
      total,
      tax,
      grandTotal,
      paymentMode,
    } = this.state;
    return (
      <div>
        <Navbar />
        <div class="container-fluid">
      <div className="row">
      <div class="col-2">
     <Sidebar/>  
     </div>              
     <div className="col-10" >
        <div className="container">
          <div className="col-sm-12">
            <h1>Add Expenses</h1>
          </div>
          <div className="d-flex flex-row card">
            <div
              className="card-body align-self-center d-flex flex-column flex-lg-row
              justify-content-between align-items-lg-center
              "
            > 
              <form>
                <input
                  className="input"
                  type="text"
                  name="supplierName"
                  value={supplierName}
                  onChange={this.changeHandler}
                  placeholder="Supplier Name"
                />
                <input
                  className="input"
                  type="text"
                  name="supplierAddress"
                  value={supplierAddress}
                  onChange={this.changeHandler}
                  placeholder="Supplier Address"
                />
                <input
                  className="input"
                  type="text"
                  name="supplierGST"
                  value={supplierGST}
                  onChange={this.changeHandler}
                  placeholder="Supplier GST"
                />
                <input
                  className="input"
                  type="text"
                  name="products"
                  value={products}
                  onChange={this.changeHandler}
                  placeholder="Products"
                />
                <input
                  className="input"
                  type="date"
                  name="date"
                  title="date"
                  value={date}
                  onChange={this.changeHandler}
                  placeholder="Date"
                />
                <input
                  className="input"
                  type="number"
                  name="total"
                  value={total}
                  onChange={this.changeHandler}
                  placeholder="Total "
                />
                <input
                  className="input"
                  type="number"
                  name="tax"
                  value={tax}
                  onChange={this.changeHandler}
                  placeholder="Tax"
                  required
                />
                <input
                  className="input"
                  type="number"
                  name="grandTotal"
                  value={grandTotal}
                  onChange={this.changeHandler}
                  placeholder="Grand Total"
                />
                <input
                  className="input"
                  type="text"
                  name="paymentMode"
                  value={paymentMode}
                  onChange={this.changeHandler}
                  placeholder="Payment Mode"
                />
                <div>
                  <button className="btn button1" onClick={this.submitHandler}>
                    Add Expenses
                  </button>
                  <ToastContainer  position="top-center"   
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default AddExpenses;
