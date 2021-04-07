import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Select from "react-select";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"

import "./style.scss";
import { url } from "../../url";  
class AddCat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      catName: "",
      parentCatId:"",
      category: [],
      selectedCat:"",
      pushCat:[]
    };
  }
  componentDidMount() {
    axios
      .get(url+`category`)
      .then((res) => {
        console.log(res);
        this.setState({ category: res.data.result });
        this.setState({pushCat:this.state.category.map(cat => {
          return ({value:cat.id,label:cat.catName})         
      })})
      })
      .catch((err) => console.log(err));
      console.log(url)
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  catHandler=(selectedCat)=>{
    this.setState({selectedCat});
  }
  submitHandler = (e) => {
    const fd = new FormData();
    if(this.state.selectedCat.value == undefined){
      fd.append("parentCatId",0)
    }
    else{
      fd.append("parentCatId", this.state.selectedCat.value)
    }
    fd.append("catName", this.state.catName);
    e.preventDefault();
    axios
      .post(url+`category/`,fd)
      .then((res) => this.props.history.push('/CategoryList') )
      .catch((err) => console.log(err));
  };
  render() {
    const { catName, parentCatId, category } = this.state;
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
          <div className="row">
            <div className="col-sm-12">
              <h1 className="my-4">Add Category</h1>
            </div>
              <div className="d-flex flex-row card mx-auto">
                <div
                  className="card-body align-self-center d-flex flex-column flex-lg-row
       justify-content-between align-items-lg-center */}
         " >
                  <form>
                    <center>
                      <div className="input-group-prepend ">
                          <Select
                          title="Only select this to insert sub-category"
                    className="react-select cat-input"
                    classNamePrefix="react-select"
            name="parentCatId"
            placeholder="Select Category"
            defaultValue="0"
            value={this.state.selectedCat}
            onChange={this.catHandler}
            options={this.state.pushCat}
            />
                      </div>
 
                      <input
                      className="input "
                      placeholder="Sub Category / Category Name"
                      aria-label="menu"
                      type="text"
                      
                      name="catName"
                      value={catName}
                      onChange={this.changeHandler}
                      required
                    />
                      <div className="col-md-12 text-center">
                        <button
                          className="btn button1"
                          onClick={this.submitHandler}
                        >
                          Add Category
                        </button>
                        <ToastContainer position="top-center" />
                      </div>
                      {/* </div> */}
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
    );
  }
}
export default AddCat;
