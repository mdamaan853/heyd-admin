import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"
import { InputGroup, FormControl, Card } from "react-bootstrap";
// import one from "../../assets/profile/1.jpg";
import axios from "axios";
import { url } from "../../url";
// import "./style.scss";
class UpdateExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      supplierName: "",
      supplierAddress: "",
      supplierGST: "",
      expenses:[],
      products: "",
      date: "",
      total: "",
      tax: "",
      grandTotal: "",
      paymentMode: "",};
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

 

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(url+`expenses/${id}`).then(
      (res) => {
        this.setState({
          supplierName: res.data.result.supplierName,
          id: res.data.result.id,
          supplierAddress: res.data.result.supplierAddress,
          supplierGST: res.data.result.supplierGST,
          products: res.data.result.products,
          date: res.data.result.date,
          total: res.data.result.total,
          tax: res.data.result.tax,
          grandTotal: res.data.result.grandTotal,
          paymentMode: res.data.result.paymentMode,
          createdAt: res.data.result.createdAt,
          update_on: res.data.result.update_on,
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
    // this.state.productImage.name
    fd.append("supplierName", this.state.supplierName);
    // console.log(this.state.productImage);
    // if(this.state.productImage != null){
    //fd.append("productImage", this.state.productImage);
    fd.append("supplierAddress", this.state.supplierAddress);
    fd.append("supplierGST", this.state.supplierGST);
    fd.append("products", this.state.products);
    fd.append("date", this.state.date);
    fd.append("total", this.state.total);
    fd.append("tax", this.state.tax);
    fd.append("grandTotal", this.state.grandTotal);
    fd.append("paymentMode", this.state.paymentMode);
    fd.append("update_on", this.state.update_on);
    axios
      .patch(url+"expenses/" + this.state.id, fd, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast("Updated successfully!");
        this.props.history.push('/Expenselist')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const { error, product } = this.state;
    return (
      <div>
         <Navbar /> 
         <div class="container-fluid">
        <div class="row">
        <div class="col-2">
                <Sidebar/>  
                </div> 
                <div className="col-10" >
              <div className="container">
            <div className="col-sm-12">
            <h1>Update Expenses</h1>
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
                      value={this.state.supplierName}
                      onChange={this.changeHandler}
                      placeholder="supplier Name"
                    />
                    <input
                      className="input"
                      type="text"
                      name="supplierAddress"
                      value={this.state.supplierAddress}
                      onChange={this.changeHandler}
                      placeholder="supplier Address"
                    />
                    <input
                      className="input"
                      type="text"
                      name="supplierGST"
                      value={this.state.supplierGST}
                      onChange={this.changeHandler}
                      placeholder="Supplier GST"
                    />
                    <input
                      className="input"
                      type="text"
                      name="products"
                      value={this.state.products}
                      onChange={this.changeHandler}
                      placeholder="products"
                    />
                    <input
                      className="input"
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.changeHandler}
                      placeholder="Date"
                    />
                    <input
                      className="input"
                      type="text"
                      name="total"
                      value={this.state.total}
                      onChange={this.changeHandler}
                      placeholder="Total"
                    />
                    <input
                      className="input"
                      type="text"
                      name="tax"
                      value={this.state.tax}
                      onChange={this.changeHandler}
                      placeholder="Tax"
                    />
                    <input
                      className="input"
                      type="text"
                      name="grandTotal"
                      value={this.state.grandTotal}
                      onChange={this.changeHandler}
                      placeholder="grand Total"
                    />
                    <input
                      className="input"
                      type="text"
                      name="paymentMode"
                      value={this.state.paymentMode}
                      onChange={this.changeHandler}
                      placeholder="Payment Mode"
                    />
                    <center>
                  <button type="button"  onClick={this.FormSubmit} className="btn  button1 ">
                    Update
                  </button>
                  <ToastContainer  position="top-center"   
                 />
                  </center>
                  <br />
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
export default UpdateExpense;
