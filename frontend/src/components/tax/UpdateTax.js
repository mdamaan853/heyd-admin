import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"
import { InputGroup, FormControl, Card } from "react-bootstrap";
// import one from "../../assets/profile/1.jpg";
import axios from "axios";
import "./style.css";
import { url } from "../../url";
class UpdateExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      tax: [],
      taxName: "",
      taxPercent: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(url+`tax/${id}`).then(
      (res) => {
        console.log(res);
        this.setState({
          id: res.data.result.id,
          taxName: res.data.result.taxName,
          taxPercent: res.data.result.taxPercent,
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
    fd.append("taxName", this.state.taxName);
    fd.append("taxPercent", this.state.taxPercent);
    axios
      .patch(url+"tax/" + this.state.id,fd, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast("updated successfully!");
        this.props.history.push('/TaxList')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
                 <div className="row">
                 <div className="col-2">
                <Sidebar/>  
                </div> 
        <div className="container-fluid">
      <div className="row">
      <div className="col-2">
     <Sidebar/>  
     </div>              
     <div className="col-10" >
        <div className="container">
          <div className="col-sm-12">
            <h1>Update Tax</h1>
          </div>
            <div className="d-flex flex-row card">
              <div
                className="card-body align-self-center d-flex flex-column flex-lg-row
              justify-content-between align-items-lg-center
              "
              >
                <form onSubmit={this.FormSubmit}>
                  <input
                    className="input"
                    type="text"
                    name="taxName"
                    value={this.state.taxName}
                    onChange={this.changeHandler}
                    placeholder="Tax Name"
                  />
                  <input
                    className="input"
                    type="text"
                    name="taxPercent"
                    value={this.state.taxPercent}
                    onChange={this.changeHandler}
                    placeholder="Tax Percent"
                  />
                  <center>
                    <button className="btn button1" >Update Tax</button>
                    <ToastContainer  position="top-center"   
                 />
                  </center>
                </form>
            </div>
          </div>
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
