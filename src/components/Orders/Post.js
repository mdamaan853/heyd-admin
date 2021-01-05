import React, { Component } from "react";
import "./style.css"
import axios from "axios";
import Moment from 'moment';
import { Link } from "react-router-dom";
import { Table, Row, Container, Col, Pagination } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Sidebar from "../../Layout/sidebar/Sidebar"

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      order: [],
      response: {},
    };
  }
  // componentDidMount() {
  //   this.getData();
  // }
  // getData() {
  //   axios.get(`http://apis.restroqr.link:4040/product/0/25`).then(
  //     (res) => {
  //       console.log(res);
  //       this.setState({ loading: true });
  //       const products = res.data.result;
  //       this.setState({ products });
  //       // this.setState({ products: res.data.result });
  //       this.setState({ loading: false });
  //     },
  //     (error) => {
  //       this.setState({ error });
  //     }
  //   );
  // }

  // Delete Data
  //   deleteOrder(id) {
  //     axios.delete(`http://apis.restroqr.link:4040/order/${id}`).then(
  //       (res) => {
  //         console.log(res);
  //         const order = this.state.order.filter((item) => item.id !== id);
  //         this.setState({ order });
  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }
  //     );
  //   }

  render() {
    const { posts, order, loading, currentPage } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <>
                <div className="col-sm-12">
                  <h1 className="my-4">Order List</h1>
                </div>
                <center>
                  <table
                    align="center"
                    className="table table-bordered  table-striped table-responsive"
                  >
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Order Id</th>
                        <th>User Id</th>
                        <th>Transaction No</th>
                        <th>Transaction Status</th>
                        <th>Order Details</th>
                        <th>Order Status</th>
                        <th>Coupons Used</th>
                        <th>Coupon Id</th>
                        <th>Use Saved Address</th>
                        <th>Saved Address Id</th>
                        <th>Custom Address</th>
                        <th>Custom PinCode</th>
                        <th>Custom City</th>
                        <th>Custom State</th>
                        <th>Custom Phone</th>
                        <th>Refund</th>
                        <th>Payment Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((result, index) => (
                        <tr key={result.id}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{result.orderId}</td>
                          <td>{result.userid}</td>
                          <td>{result.transactionNo}</td>
                          <td>{result.transactionStatus}</td>
                          <td>{result.orderDetails}</td>
                          <td>{result.orderStatus}</td>
                          <td>{result.couponsUsed}</td>
                          <td>{result.couponID}</td>
                          <td>{result.useSavedAddress}</td>
                          <td>{result.savedaddressID}</td>
                          <td>{result.customAddress}</td>
                          <td>{result.customPinCode}</td>
                          <td>{result.customCity}</td>
                          <td>{result.customState}</td>
                          <td>{result.customPhone}</td>
                          <td>{result.refund}</td>
                          <td>{Moment(result.paymentTime).format('DD-MM-YYYY')}</td>
                          {/* <td> */}
                          {/* <div className="product-hover ">
                    <button className="btn" type="button">
                    <Link to={"/updateorder/" + result.id}>
                      <AiFillEdit
                        color="98FB98"
                        size={30}
                        className="editBtn"
                      />
                      </Link>
                    </button>
                    <button
                      className="btn"
                      onClick={() => this.deleteorder(result.id)}
                      type="button"
                    >
                      <AiFillDelete
                        size={30}
                        className="deleteBtn"
                        color="#626ed4"
                      />
                    </button>
                  </div>
                </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </center>
      </>
    );
  }
}

export default Posts;
