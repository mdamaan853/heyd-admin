import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Moment from 'moment';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import "./style.css";
import { url } from "../../url";
export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      coupon: [],
      response: {},
    };
  }

  // Delete Data
  deleteCoupon(id) {
    axios.delete(url+`coupon/${id}`).then(
      (res) => {
        window.confirm('are you sure want to delete?');
        window.location.reload(false)
        toast("deleted successfully!");
        const coupon = this.state.coupon.filter((item) => item.id !== id);
        this.setState({ coupon });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }

  render() {
    const { posts, loading, currentPage } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
                <div className="col-sm-12">
                  <h1>Coupon List</h1>
                </div>
                <div className="d-flex justify-content-center">
                  <table
                    align="center"
                    className="table table-bordered  table-responsive"
                  >
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Coupon Code</th>
                        <th>Expiry Date</th>
                        <th>Title</th>
                        <th>Description</th>
                       
                        <th>Upto </th>
                        <th>Price </th>
                        <th>Create Date</th>
      
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((result, index) => (
                        <tr key={result.id}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{result.couponCode}</td>
                          <td>{Moment(result.expiryDate).format('DD-MM-YYYY')}</td>
                          <td>{result.title}</td>
                          <td>{result.desc}</td>
                          
                          <td>{result.limit}</td>
                          <td>{result.amount}</td>
                          <td>{Moment(result.createdTime).format('DD-MM-YYYY')}</td>
            
                          <td>
                            <button className="btn" type="button">
                                <Link to={"/updateCoupon/" + result.id}>
                                  <AiFillEdit size={30} className="editBtn" />
                                </Link>
                              </button>
                                </td>
                            <td>
                              <button
                                className="btn"
                                type="button"
                                onClick={() => this.deleteCoupon(result.id)}
                              >
                                <AiFillDelete
                                  size={30}
                                  className="deleteBtn"
                                  color="#922c88"
                                />
                              </button>
                              <ToastContainer  position="top-center"   
                 />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
    );
  }
}

export default Posts;
