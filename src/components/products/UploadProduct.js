import React, { Component } from "react";
import Navbar from "../../Layout/Navbar";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./style.scss";
import Sidebar from "../../Layout/sidebar/Sidebar"
import { url } from "../../url";
const selectData = [
  { label: "Veg", value: "0", key: 0 },
  { label: "Non-Veg", value: "1", key: 1 },
];

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catId: "",
      menuName: "",
      productImage:null,
      selectedFile:null,
      product:[],
      description: "",
      calories: "",
      protein: "",
      fat: "",
      carbohydrates: "",
      fibre: "",
      costPrice: "",
      regularPrice: "",
      sellPrice: "",
      category: [],
      select:"",
      tax: [],
      pushTax:"",
      pushCat:"",
      quantity:"",
      foodType:[],
      selectfood:"",
      selectedOptions: [],
      selectedCat:[],
///// error variable

catIdError: "",
taxError:"",
menuNameError: "",
productImageError:"",
descriptionError: "",
caloriesError: "",
proteinError: "",
fatError: "",
carbohydratesError: "",
fibreError: "",
costPriceError: "",
regularPriceError: "",
sellPriceError: "",
quantityError:"",
foodTypeError:"",
    };
  }
  // get category tax
  componentDidMount() {
    axios
      .all([
        axios.get(url+`category`),
        axios.get(url+`tax`),
      ])
      .then(
        axios.spread((cat, tax) => {
          this.setState({
            category: cat.data.result,
            tax: tax.data.result,
          });
          // console.log(tax);
          this.setState({pushTax:this.state.tax.map(taxes => {
            // console.log(taxes.taxName)
            return ({value:taxes.id,label:taxes.taxName})         
        })})
        this.setState({pushCat:this.state.category.map(cat => {
          // console.log(cat.catName)
          return ({value:cat.id,label:cat.catName})         
      })})
        // .catch((err) => console.log(err));
        // })
        })
      );
  }
  foodTypeHandler=(foodType)=>{
    console.log(foodType)
    this.setState({foodType});
  }
  changeHandler = (e) => {
    console.log(e)
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };
  handleImageChange = (event) => {
    console.log(this.state.productImage)
    console.log(event)
    this.setState({
      productImage: '',
    })
    this.setState({
      selectedFile: event.target.files[0],
    });
    console.log(this.state.selectedFile)
    
    let reader = new FileReader();
    console.log(reader)
    if(event.target.files[0]){
      reader.onloadend = () => {
        this.setState({
          productImage: reader.result,
        });
        console.log(reader)
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  // tax
  catHandler=(selectedCat)=>{
    this.setState({selectedCat});
  }
  handleChangeMulti = (selectedOptions) => {
    this.setState({ selectedOptions });
    // console.log(`Option selected:`, selectedOptions);
  };


validate=()=>{

this.state.catIdError= "";
this.state.taxError="";
this.state.menuNameError= "";
this.state.productImageError="";
this.state.descriptionError= "";
this.state.caloriesError= "";
this.state.proteinError= "";
this.state.fatError= "";
this.state.carbohydratesError= "";
this.state.fibreError= "";
this.state.costPriceError= "";
this.state.regularPriceError= "";
this.state.sellPriceError= "";
this.state.quantityError="";
this.state.foodTypeError="";

let val=1
  if(this.state.selectedCat.length==0){
    this.setState({catIdError:"Category is required"})
    val=0
  }
  if(this.state.selectedOptions.length==0){
    this.setState({taxError:"Tax is required"})
    val=0
  }

  if(!this.state.menuName){
    this.setState({menuNameError:"Menu is requred"})
    val=0
  }

  if(!this.state.selectedFile){
    this.setState({productImageError:"Image is required"})
    val=0
  }
 

  if(!this.state.description){
    this.setState({descriptionError:"Description is required"})
    val=0
  }
  

  if(!this.state.calories){
    this.setState({caloriesError:"calories is required"})
    val=0
  }


  if(!this.state.protein){
    this.setState({proteinError:"Protien is required"})
    val=0
  }
  
  if(!this.state.fat){
    this.setState({fatError:"Fat is required"})
    val=0
  }

  if(!this.state.carbohydrates){
    this.setState({carbohydratesError:"Carbohydrates is required"})
    val=0
  }
  
  if(!this.state.fibre){
    this.setState({fibreError:"Fibre is required"})
   val=0
  }
  if(!this.state.costPrice){
    this.setState({costPriceError :"Cost Price is required"})
val=0
  }
  if(!this.state.regularPrice){
    this.setState({regularPriceError:"Regular Price is required"})
    val=0
  }

  if(!this.state.sellPrice){
    this.setState({sellPriceError:"Sell Price is required"})
    val=0
  }

  if(!this.state.quantity){
    this.setState({quantityError:"Quantity is required"})
    val=0
  }
  if(this.state.foodType.length==0){
    this.setState({foodTypeError:"Food Type is required"})
    val=0
  }
 
  return val
  
  
}
FormProSubmit = (e) => {
  e.preventDefault();
  const isValid=this.validate();
  console.log(isValid)
  if(isValid){
    console.log(this.state)
    this.setState({select:''});
    this.state.select = this.state.selectedOptions.map(selected => {
    return(selected.value)
   })
   this.state.foodType=this.state.foodType.value
   console.log(this.state.foodType)
    e.preventDefault();
    const fd = new FormData();
    fd.append("catId", this.state.selectedCat.value);
    fd.append("tax_id", this.state.select.join(','));
    fd.append("menuName", this.state.menuName);
    // console.log(this.state.productImage)
    // if (this.state.productImage == null) {
    //   alert("please add image");
    // } else {
    //   fd.append("productImage", this.state.selectedFile);
    // }
    if (this.state.productImage != null) {
      fd.append("productImage", this.state.selectedFile);
    }
    // fd.append("productImage", this.state.productImage);
    fd.append("description", this.state.description);
    fd.append("calories", this.state.calories);
    fd.append("protein", this.state.protein);
    fd.append("fat", this.state.fat);
    fd.append("carbohydrates", this.state.carbohydrates);
    fd.append("fibre", this.state.fibre);
    fd.append("costPrice", this.state.costPrice);
    fd.append("regularPrice", this.state.regularPrice);
    fd.append("sellPrice", this.state.sellPrice);
    fd.append("quantity", this.state.quantity);
    fd.append("foodType", this.state.foodType);
    axios
      .post(url+"product", fd, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response)
        toast("Product added successfully!");
        this.props.history.push('/Pro')
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };
 render() {
    // const optionItems = this.state.tax.map((result) => (
    //   <option key={result.id} value={result.id}>
    //     {result.taxName}
    //   </option>
    // ));
    let $imagePreview = (
      <div className="previewText img-fluid mx-auto image-container">
        <p className="text-center mb-4"> Select an Image for Preview</p>
      </div>
    );
    if (this.state.productImage) {
      $imagePreview = (
        <div className="image-container">
          <img
            src={this.state.productImage}
            alt="productImage"
            width="330px"
            height="270px"  
          />
        </div>
      );
    }
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
                <div className="col-10" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center my-4">Add Product</h1>
            </div>
            <div className="col-md-12">
              <div className="d-flex flex-row card">
                <div
                  className="card-body align-self-center d-flex flex-column flex-lg-row
              justify-content-between align-items-lg-center
              "
                >
                  <form >
                    <div className="col-md-4 mx-auto">
                      <input  
                        type="file"        
                        id="productImage"
                        hidden
                        name="productImage"
                        accept="productImage/png, productImage/jpeg , productImage/jpg"
                        onChange={this.handleImageChange}
                        required
                      />
                      <label className="new-button" htmlFor="productImage">
                        {" "}
                        Choose Image
                      </label>
                      {/* <div className="form-group preview">{$imagePreview}</div> */}
                      {this.state.productImage?(
                        <div className="form-group preview">{$imagePreview}</div>):
                        ''
                      }
                      {!this.state.selectedFile  ? <small className="form-alert">{this.state.productImageError}</small>:null}
                    </div>
                    <div className="row">
                      <div className="col-md-6 ">
                         <Select
                    className=" cat-input"
                    classNamePrefix="react-select"
            name="catId"
            placeholder="Select Category"
            value={this.state.selectedCat}
            onChange={this.catHandler}
            options={this.state.pushCat}
          /> {this.state.selectedCat.length==0  ? <small className="form-alert">{this.state.catIdError}</small>:null}
                      </div>
                      <div className="col-md-6">
                     <Select
                    className=" cat-input"
                    classNamePrefix="react-select"
                    isMulti
                   name="tax_id"
                    placeholder="Add Tax"
                    value={this.state.selectedOptions}
                    onChange={this.handleChangeMulti}
                     options={this.state.pushTax}
          />{this.state.selectedOptions.length==0  ? <small className="form-alert">{this.state.taxError}</small>:null}
                      </div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Menu"
                      aria-label="menu"
                      type="text"
                      name="menuName"
                      value={this.state.menuName}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.menuName ? <small className="form-alert">{this.state.menuNameError}</small>:null}
                    </div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Calories"
                      aria-label="calories"
                      type="number"
                      name="calories"
                      value={this.state.calories}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.calories ? <small className="form-alert">{this.state.caloriesError}</small>:null}
                    </div>
                      <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Protein"
                      aria-label="protein"
                      type="number"
                      name="protein"
                      value={this.state.protein}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.protein  ? <small className="form-alert">{this.state.proteinError}</small>:null}
                    </div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Fat"
                      aria-label="fat"
                      type="number"
                      name="fat"
                      value={this.state.fat}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.fat  ? <small className="form-alert">{this.state.fatError}</small>:null}
                    </div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Carbohydrates"
                      aria-label="carbohydrates"
                      type="number"
                      name="carbohydrates"
                      value={this.state.carbohydrates}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.carbohydrates  ? <small className="form-alert">{this.state.carbohydratesError}</small>:null}</div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Fibre"
                      aria-label="Fibre"
                      type="number"
                      name="fibre"
                      value={this.state.fibre}
                      onChange={this.changeHandler}
                      required
                    />{!this.state.fibre  ? <small className="form-alert">{this.state.fibreError}</small>:null}</div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Cost Price"
                      aria-label="CostPrice"
                      type="number"
                      name="costPrice"
                      value={this.state.costPrice}
                      onChange={this.changeHandler}
                      required
                    />{!this.state.costPrice  ? <small className="form-alert">{this.state.costPriceError}</small>:null}</div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Regular Price"
                      aria-label="RegularPrice"
                      type="number"
                      name="regularPrice"
                      value={this.state.regularPrice}
                      onChange={this.changeHandler}
                      required
                    />{!this.state.regularPrice ? <small className="form-alert">{this.state.regularPriceError}</small>:null}</div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Sell Price"
                      aria-label="SellPrice"
                      type="number"
                      name="sellPrice"
                      value={this.state.sellPrice}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.sellPrice ? <small className="form-alert">{this.state.sellPriceError}</small>:null}
                    </div>
                    <div className="col-md-6">
                    <input
                      className="input"
                      placeholder="Quantity"
                      aria-label="SellPrice"
                      type="number"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.quantity  ? <small className="form-alert">{this.state.quantityError}</small>:null}
                    </div>
                    <div className="col-md-6 ">
                        <Select
                          className=" cat-input"
                          classNamePrefix="react-select"
                          name="foodType"
                          value={this.state.foodType}
                          onChange={this.foodTypeHandler}
                          placeholder="Food Type"
                          options={selectData}
                        />{this.state.foodType.length==0  ? <small className="form-alert">{this.state.foodTypeError}</small>:null}
                      </div>
                      <div className="col-md-12">
                    <textarea className="input" style={{width:'95%'}}
                      name="description"
                      placeholder="Description"
                      value={this.state.description}
                      onChange={this.changeHandler}
                      required
                    />
                    {!this.state.description  ? <small className="form-alert">{this.state.descriptionError}</small>:null}
                    </div>
                    </div>
                    <button
                      onClick={this.FormProSubmit}
                      type="submit"
                      className="btn button1"
                    >
                      Add Product
                    </button>
                    <ToastContainer position="top-center" />
                    <br />
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
export default AddProduct;





















