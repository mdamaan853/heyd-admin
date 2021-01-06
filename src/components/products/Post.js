import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from 'moment';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "../../Layout/sidebar/Sidebar"
import CatName from "./catName"
import TaxName from "./taxName"
import axios from "axios";
import "./style.scss";
import { url } from "../../url";
export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      product: [],
      catId:"",
      response: {},
    };   
  }
  deleteProduct(id) {
    if(window.confirm('Are you sure you want to Delete')){
    axios.delete(url+`product/${id}`)
    .then(res => window.location.reload(false))
    .catch(err => console.log(err))
    // alert("deleted")
    //window.location.reload(false)  }
    // );
    }
  }
  render() {
    console.log(this.state.product)
    const { posts, loading, currentPage } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
          return (  
                  <div>
                  <div className="col-sm-12">
                  <h1 className="my-4">Product List</h1>
                  </div>
                  <table
                    align="center" background="black"
                    className="table table-bordered table-responsive"
                  >
                    <thead>
                      <tr >
                        <th scope="col"> S.no</th>
                        <th scope="col">Image</th>
                        <th scope="col">Category</th>
                        <th scope="col">Menu Name</th>
                        <th scope="col">Food Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Protein</th>
                        <th scope="col">Fat(gm)</th>
                        <th scope="col">Carbs(gm)</th>
                        <th scope="col">Fibre(gm)</th>
                        <th scope="col">CostPrice</th>
                        <th scope="col">RegularPrice</th>
                        <th scope="col">SellPrice</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((result, index) =>(      
                        <tr key={result.id} >
                          <td scope="col">{(currentPage - 1) * 10 + index + 1}</td>
                          {/* <td>{index + 1}</td> */}
                          <td scope="col">
                            <img
                              src={
                                url +
                                result.productImage
                              }
                              height="70px"
                              width="70px"
                              />
                          </td>
                          <td >{<CatName id={result.catId}/>}</td>
                          <td>{result.menuName}</td>
                          <td >{result.foodType==0?("VEG"):"NON-VEG"}</td>
                          <td >{result.description}</td>
                          <td >{result.calories}</td>
                          <td >{result.protein}</td>
                          <td >{result.fat}</td>
                          <td >{result.carbohydrates}</td>
                          <td>{result.fibre}</td>
                          <td >{result.costPrice}</td>
                          <td >{result.regularPrice}</td>
                          <td >{result.sellPrice}</td>
                          <td >{<TaxName id={result.tax_id}/>}</td>
                          <td >{result.quantity}</td>
                          <td >{Moment(result.createdTime).format('DD-MM-YYYY')}</td>
                          <td >
                            <button
                              className="btn button-success button-rounded"
                              type="button"
                              >
                              <Link to={"/updateProduct/" + result.id}>
                                <AiFillEdit size={30} className="deleteBtn" />
                              </Link>
                            </button>
                          </td>
                          <td >
                            <button
                              className="btn button-rounded"
                              type="submit"
                              onClick={() => this.deleteProduct(result.id)}
                              >
                              <AiFillDelete
                                size={30}
                                className="deleteBtn"
                                color="#922c88"
                                />
                            </button>
                            <ToastContainer position="top-center" />
                          </td>
                        </tr>
                        ))}
                    </tbody>
                  </table>                  
        </div>
    );
  }
}

export default Posts;
