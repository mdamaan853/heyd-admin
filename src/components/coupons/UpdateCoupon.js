import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Switch from "react-switch";
import Moment from 'moment';
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"
// import one from "../../assets/profile/1.jpg";
import axios from "axios";
import { url } from "../../url";
// import "./style.scss";
class UpdateExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      couponCode: "",
      expiryDate:"",
      numberOfTimesCanBeUsed: "",
      coupon: [],
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
    this.setState({ [e.target.name]: e.target.value });
  };
  typeHandler = (type) => {
    this.setState({type});
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(url+`coupon/${id}`).then(
      (res) => {
        this.setState({
          couponCode: res.data.result.couponCode,
          id: res.data.result.id,
          expiryDate: res.data.result.expiryDate,
          numberOfTimesCanBeUsed: res.data.result.numberOfTimesCanBeUsed,
          allowOnlyNewUser: res.data.result.allowOnlyNewUser,
          title: res.data.result.title,
          desc: res.data.result.desc,
          type: res.data.result.type,
          limit: res.data.result.limit,
          amount: res.data.result.amount,
          // createdAt: res.data.result.createdAt,
          // update_on: res.data.result.update_on,
        });
        console.log(this.state)
      },
      (error) => {
        this.setState({ error });
      }
    );
  }

  submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("couponCode", this.state.couponCode);
    // console.log(this.state.productImage);
    // if(this.state.productImage != null){
    //fd.append("productImage", this.state.productImage);
    fd.append("expiryDate", this.state.expiryDate);
    fd.append("numberOfTimesCanBeUsed", this.state.numberOfTimesCanBeUsed);
    fd.append("allowOnlyNewUser", this.state.allowOnlyNewUser);
    fd.append("title", this.state.title);
    fd.append("desc", this.state.desc);
    fd.append("type", this.state.type);
    fd.append("limit", this.state.limit);
    fd.append("amount", this.state.amount);
    axios
      .patch(url+"coupon/" + this.state.id, fd, {})
      .then((response) => {
        this.props.history.push('/CouponList')
        toast("Updated successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { error, product } = this.state;
    // console.log(this.props.match.params)
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
                 <div className="row">
                 <div className="col-2">
                <Sidebar/>  
                </div>              
          <div className="container">
            <div className="col-sm-12">
              <h1>Update Coupon</h1>
            </div>
            <div className="d-flex flex-row card">
              <div
                className="card-body align-self-center d-flex flex-column flex-lg-row
              justify-content-between align-items-lg-center
              "
              >
                <form>
                  <div className="row">
                <div className="col-6">
                  <input
                    className="input"
                    type="text"
                    name="couponCode"
                    value={this.state.couponCode}
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
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  />
                  </div>
                  <div className="col-6">
                  <input
                    className="input"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                    placeholder="Title"
                    title="Title"
                  />
                  </div>
                  <div className="col-6 py-4 ">
                          <label>
        <span className="input ">Add via Percent</span>
        <Switch onChange={this.typeHandler} checked={this.state.type} />
      </label>
      </div>
      <div className="col-6">
                    <input
                      className="input"
                      type="number"
                      name="amount"
                      value={this.state.amount}
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
         value={this.state.limit}
         onChange={this.changeHandler}
         placeholder="Maximum Amount Of Discount"
       />
      </div>):
           ''
          }
              <div className="col-12 ">
                    <textarea
                    className="input" style={{width:'95%'}}
                      type="text"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                      aria-label="empty textarea"
                      placeholder="Description"
                    />
                  </div>
                  <br />
                  <button className="btn button1" onClick={this.submitHandler}>Add Coupon</button>
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
    );
  }
}
export default UpdateExpense;
