import { Component } from "react";
import Switch from "react-switch";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"
import "./style.css";
import { url } from "../../url";
class AddCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponCode: "",
      coupon: [],
      expiryDate: "",
      numberOfTimesCanBeUsed: "",
      allowOnlyNewUser: "",
      title: "",
      desc: "",
      type: "",
      limit: "",
      amount: "",
      createdAt: "",
      update_on: "",
    };
  }



  changeHandler = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };
  typeHandler = (type) => {
    this.setState({type});
  };

  submitHandler = (e) => {
    console.log(this.state)
    e.preventDefault();
    axios
      .post(url+`coupon`, this.state)
      .then((res) => 
      this.props.history.push('/CouponList'),
       toast.success("added successfully!")
      )
      .catch((err) => console.log(err));
  };
  render() {
    const {
      couponCode,
      expiryDate,
      title,
      desc,
      type,
      limit,
      amount,
    } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
        <div className="row">
        <div className="col-2">
                <Sidebar/>  
                </div> 
                <div className="col-10" >
        <div className="container">
          <div className="col-sm-12">
            <h1 className="my-4">Add Coupon</h1>
          </div>
          <div className="d-flex flex-row card">
            <div
              className="card-body align-self-center d-flex flex-column flex-lg-row
              justify-content-center align-items-lg-center
              "
            >
                <form onSubmit={this.submitHandler}>
                  <div className="row">
                <div className="col-6">
                  <input
                    className="input"
                    type="text"
                    name="couponCode"
                    value={couponCode}
                    onChange={this.changeHandler}
                    placeholder="Coupon Code"
                  />
                  </div>
                  <div className="col-6">
                  <input
                    className="input"
                    type="date"
                    name="expiryDate"
                    title="Expiry Date"
                    value={expiryDate}
                    onChange={this.changeHandler}
                  />
                  </div>
                  <div className="col-6">
                  <input
                    className="input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.changeHandler}
                    placeholder="Title"
                    title="Title"
                  />
                  </div>
                  <div className="col-6 py-4 ">
                          <label>
        <span className="input ">Add via Percent</span>
        <Switch onChange={this.typeHandler} checked={type} />
      </label>
      </div>
      <div className="col-6">
                    <input
                      className="input"
                      type="number"
                      name="amount"
                      value={amount}
                      onChange={this.changeHandler}
                      placeholder="Amount / Percentage"
                    />
                </div>
      {this.state.type?(
       <div className="col-6">
       <input
         className="input"
         type="number"
         name="limit"
         value={limit}
         onChange={this.changeHandler}
         placeholder="Maximum Amount Of Discount"
       />
      </div>):
           ''
          }
              <div className="col-12 ">
                    <textarea className="input" style={{width:'95%'}}
                      type="text"
                      name="desc"
                      value={desc}
                      onChange={this.changeHandler}
                      aria-label="empty textarea"
                      placeholder="Description"
                    />
                  </div>
                  <br />
                  <button className="btn button1">Add Coupon</button>
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
export default AddCoupon;
