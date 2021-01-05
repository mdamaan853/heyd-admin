import { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Layout/sidebar/Sidebar"
import Navbar from "../../Layout/Navbar";
import { url } from "../../url";
class AddTax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxName: "",
      taxPercent: "",
      tax: [],
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(url+`tax/`, this.state)
      .then((res) =>  toast.success("added successfully!"),
      this.props.history.push('/TaxList'),
      this.setState({
        taxName:"",
      taxPercent:"",
      // tax: [],
      }),
      )
      .catch((err) => console.log(err));
      // e.target.reset()
    };
    render() {
    const { taxName, taxPercent } = this.state;
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
            <h1>Add Tax</h1>
          </div>
            <div className="d-flex flex-row card">
              <div
                className="card-body align-self-center d-flex flex-column flex-lg-row
              justify-content-between align-items-lg-center
              "
              >
                <form onSubmit={this.submitHandler} id="formSubmit">
                  <input
                    className="input"
                    type="text"
                    name="taxName"
                    value={taxName}
                    onChange={this.changeHandler}
                    placeholder="Tax Name"
                  />
                  <input
                    className="input"
                    type="text"
                    name="taxPercent"
                    value={taxPercent}
                    onChange={this.changeHandler}
                    placeholder="Tax Percent"
                  />
                  <center>
                    <button className="btn button1" >Add Tax</button>
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
    );
  }
}
export default AddTax;
