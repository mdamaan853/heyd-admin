import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Select from "react-select";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar"

import "./style.scss";
import { url } from "../../url";
class UpdateCat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      catName: "",
      parentCatId: "",
      category: [],
      selectedCat:"",
      pushCat:[]
    };
  }
  componentDidMount() {
      const id=this.props.match.params.id
    axios
      .get(url+`category/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
            id: res.data.result.id,
            catName: res.data.result.catName,
          });
    //     this.setState({pushCat:this.state.category.map(cat => {
    //       // console.log(cat.id)
    //       return ({value:cat.id,label:cat.catName})         
    //   })})
      })
      .catch((err) => console.log(err));
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
//   catHandler=(selectedCat)=>{
//     // console.log(selectedCat)
//     this.setState({selectedCat});
//   }
  submitHandler = (e) => {
    // console.log(this.state);
    const fd = new FormData();
    // console.log(this.state.selectedCat.value)
    // fd.append("parentCatId", this.state.selectedCat.value);
    fd.append("catName", this.state.catName);
    e.preventDefault();
    axios
      .patch(url+`category/${this.state.id}`,fd)
      .then((res) =>
      //  toast.success("category added successfully!"),
       this.props.history.push('/CategoryList'))
    //    console.log(this.props))
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
              <h1 className="my-4">Update Category</h1>
            </div>
              <div className="d-flex flex-row card mx-auto">
                <div
                  className="card-body align-self-center d-flex flex-column flex-lg-row
       justify-content-between align-items-lg-center */}
         "
                 >
                  <form>
                    <center>
                      {/* <div className="input-group-prepend "> */}
                        {/* <select
                          title="Only select this to insert sub-category"
                          className="custom-select "
                          id="inputGroupSelect01"
                          onChange={this.changeHandler}
                          name="parentCatId"
                        >
                          <option selected value="0">
                            None
                          </option>
                          {category.map((cat) => (
                            <option value={cat.id}>{cat.catName}</option>
                          ))}
                        </select> */}
                          {/* <Select
                          title="Only select this to insert sub-category"
                    className="react-select cat-input"
                    classNamePrefix="react-select"
            name="parentCatId"
            placeholder="Select Category"
            value={this.state.selectedCat}
            onChange={this.catHandler}
            options={this.state.pushCat}
            /> */}
                      {/* </div> */}
 
                      <input
                      className="input "
                      placeholder="Category Name"
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
                          Update Category
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
export default UpdateCat;
