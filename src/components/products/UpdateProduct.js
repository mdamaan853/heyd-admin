import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select"
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import "./style.scss";
import { url } from "../../url";
const selectData=[
  { label: "Veg", value: "0" },
  { label: "Non-Veg", value: "1" },
];
class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      catId: "",
      menuName: "",
      productImage: null,
      selectedFile: null,
      product: [],
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
      quantity:"",
      foodType:[],
      selectData:[],
      selectedOptions: []
    }
  };
  // get category tax
   componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .all([
        axios.get(url+`category`),
        axios.get(url+`tax`),
        axios.get(url+`product/${id}`)
      ])
      .then(
        axios.spread((cat, tax,product) => {
          this.setState({
            category: cat.data.result,
            tax: tax.data.result,
          });
          
          this.setState({selectData:selectData.map(cat => {
            return (cat)         
        })})
        console.log(this.state.selectData)
          this.state.selectData.map(foodType =>{
            if(foodType.value == product.data.result.foodType){
              this.setState({foodType});
            }
          })
          console.log(this.state.foodType);
          const taxArr = product.data.result.tax_id.split(',');
          var tempArray = []
          console.log(taxArr);
          this.setState({pushTax:this.state.tax.map(taxes => {

            if(taxArr.indexOf(taxes.id.toString()) > -1){
              console.log(taxes.id)
              tempArray.push({value:taxes.id,label:taxes.taxName});
            }
            return ({value:taxes.id,label:taxes.taxName})         
        })
      })
      this.setState({selectedOptions:tempArray})
         this.setState({pushCat:this.state.category.map(cat => {
          if(cat.id == product.data.result.catId){
          this.setState({selectedCat:{value:cat.id,label:cat.catName}})         
          }
          return ({value:cat.id,label:cat.catName})         
      })})
        this.setState({
          product:product.data.result
        })
        this.setState({
          catId: product.data.result.catId,
                    menuName: product.data.result.menuName,
                    productImage: product.data.result.productImage,
                    id: product.data.result.id,
                    description: product.data.result.description,
                    calories: product.data.result.calories,
                    protein: product.data.result.protein,
                    fat: product.data.result.fat,
                    carbohydrates: product.data.result.carbohydrates,
                    fibre: product.data.result.fibre,
                    costPrice: product.data.result.costPrice,
                    regularPrice: product.data.result.regularPrice,
                    sellPrice: product.data.result.sellPrice,
                    tax_id: product.data.result.tax_id,
                    tax: tax.data.result,
                    //foodType:product.data.result.foodType,
                    quantity:product.data.result.quantity,
                    
        })
        console.log(this.state.productImage)
        })
    ).catch(err => console.log(err))
  }
  catHandler=(selectedCat)=>{
    this.setState({selectedCat});
  }
  foodTypeHandler=(foodType)=>{
    console.log(this.state.foodType);
    this.setState({ foodType });
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = (event) => {
    this.setState({
      productImage:'',
    })
    this.setState({
      selectedFile: event.target.files[0],
    });

    let reader = new FileReader();

    if(event.target.files[0]){
    reader.onloadend = () => {
      this.setState({
        productImage: reader.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  }
  handleChangeMulti = (selectedOptions) => {
    this.setState({ selectedOptions });
    console.log(`Option selected:`, selectedOptions);
  };
  FormSubmit = (e) => {
    this.setState({select:''});
    this.state.select = this.state.selectedOptions.map(selected => {
    console.log(selected.value)
    return(selected.value)
   })
   this.state.foodType=this.state.foodType.value
   e.preventDefault();
   const fd = new FormData();
   fd.append("catId", this.state.selectedCat.value);
   fd.append("tax_id", this.state.select.join(','));
   fd.append("menuName", this.state.menuName);
   console.log(this.state.productImage);
   if(this.state.selectedFile != null){
  fd.append("productImage", this.state.selectedFile);
    }
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
      .patch(url+"product/" + this.state.id, fd, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response)
        this.props.history.push('/Pro')
        toast("Product updated successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
    };
  render() {
    let $imagePreview = (
      <div className="previewText img-fluid mx-auto image-container" >
        <p className="text-center mb-4"> Select an Image for Preview</p>
      </div>
    );
    if (this.state.productImage) {
      $imagePreview = (
        <div className="image-container">
          <img
            src={url+this.state.productImage}
            // alt="productImage"
            width="330px"
            height="270px"
          />
        </div>
      );
    }
    if (this.state.selectedFile) {
      $imagePreview = (
        <div className="image-container" >
          <img
            src={this.state.productImage}
            width="330px"
            height="270px"
          />
        </div>
      );
    }
    // else{
    //   $imagePreview = (
    //     <div className="image-container">
    //       <img
    //         src={this.state.productImage}
    //         // alt="productImage"
    //         width="330px"
    //         height="270px"
    //       />
    //     </div>
    //   );
    // }
    const { error, product, categorys } = this.state;
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
<h1 className="text-center my-4">Update Product</h1>
</div>
<div className="col-md-12">
<div className="d-flex flex-row card">
<div
 className="card-body align-self-center d-flex flex-column flex-lg-row
justify-content-between align-items-lg-center
">
 <form>
   <div className="col-md-4 mx-auto">
     <input
       className="img-fluid"
       hidden
       type="file"
       id="upload"
       name="productImage"
       accept="productImage/png, productImage/jpeg , productImage/jpg"
       onChange={this.handleImageChange}
     />
     <label className="new-button" htmlFor="upload">
       {" "}
       Choose Image
     </label>
     {/* <div className="form-group preview">{$imagePreview}</div> */}
     {this.state.productImage?(
       <div className="form-group preview">{$imagePreview}</div>):
       ''
     }
   </div>
   <div className="row">
     <div className="col-md-6 ">
       <Select
            className="cat-input"
            classNamePrefix="react-select"
            name="catId"
            placeholder="Select Category"
            value={this.state.selectedCat}
            onChange={this.catHandler}
            options={this.state.pushCat}
          />
     </div>
     <div className="col-md-6">
       {/* <Select
         title="select tax or tax percent."
         className="react-select input"
         classNamePrefix="react-select"
         isMulti
         name="tax_id"
         value={this.state.selectedOptions}
         onChange={this.handleChangeMulti}
         placeholder="Select Tax.."
         options={selectData}
         valueKey="tax_id"
       >
       </Select> */}
    <Select
className="cat-input"
classNamePrefix="react-select"
isMulti
name="tax_id"
placeholder="Add Tax"
value={this.state.selectedOptions}
onChange={this.handleChangeMulti}
options={this.state.pushTax}
/>
     </div>
   
   <div className="col-md-6">
   <input
     className="input"
     placeholder="Title"
     aria-label="menu"
     type="text"
     name="menuName"
     value={this.state.menuName}
     onChange={this.changeHandler}
     required
   />
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
   /></div>
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
   /></div>
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
   /></div>
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
   /></div>
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
   /></div>
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
   /></div>
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
   </div>
   <div className="col-md-6 ">
       <Select
         title="select Food Type"
         className="cat-input"
         classNamePrefix="react-select"
         name="foodType"
         value={this.state.foodType}
         onChange={this.foodTypeHandler}
         placeholder="Food Type"
         options={this.state.selectData}
         // valueKey="foodType"
       >
       </Select>
     </div>
     <div className="col-md-12">
   <textarea className="input" style={{width:'95%'}}
     name="description"
     placeholder="Description"
     value={this.state.description}
     onChange={this.changeHandler}
     required
   />
   </div>
   </div>
   <button
     onClick={this.FormSubmit}
     type="submit"
     className="btn button1"
   >
     Update Product
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
export default UpdateProduct;
