import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Row, Container, Col, Pagination } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Sidebar from "../../Layout/sidebar/Sidebar"
import "./style.css";
import Moment from 'moment';
import { url } from "../../url";
export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }
  deleteUsers(id) {
    axios.delete(url+`users/${id}`).then(
      (res) => {
        console.log(res);
        const users = this.state.users.filter((item) => item.id !== id);
        this.setState({ users });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }

  render() {
    const { posts, users, loading, currentPage } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <>              
                <div className="col-sm-12">
                  <h1>User List</h1>
                </div>

                <table
                  align="center"
                  className="table table-bordered table-responsive "
                >
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Profile Pic</th>
                      <th>Name</th>
                      {/* <th>User Type</th> */}
                      {/* <th>Ip Address</th> */}
                      {/* <th>Incart</th> */}
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Reg Time</th>
                      <th>Last Login</th>
                      <th>Device Type</th>
                      <th>Wallet Balance</th>
                      <th>Last Transactions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((result, index) => (
                      <tr key={result.id}>
                        <td>{(currentPage - 1) * 10 + index + 1}</td>
                        <td>
                          <img
                            src={
                              url +
                              result.profilePicUrl
                            }
                            height="70px"
                            border-radius="8px"
                            width="70px"
                          />
                        </td>
                        <td>{result.name}</td>
                        {/* <td>{result.userType}</td> */}
                        {/* <td>{result.ipaddress}</td> */}
                        {/* <td>{result.incart}</td> */}
                        <td>{result.mobile}</td>
                        <td>{result.email}</td>

                        <td>{Moment(result.regTime).format('DD-MM-YYYY')}</td>
                        <td>{Moment(result.lastlogin).format('DD-MM-YYYY')}</td>
                        <td>{result.deviceType}</td>
                        <td>{result.walletBalance}</td>
                        <td>{result.lastTokenTransactions}</td>
                        {/* <td> */}
                        {/* <div className="product-hover ">
                    <button className="btn" type="button">
                    <Link to={"/updateUsers/" + result.id}>
                      <AiFillEdit
                        color="98FB98"
                        size={30}
                        className="editBtn"
                      />
                      </Link>
                    </button>
                    <button
                      className="btn"
                      onClick={() => this.deleteUsers(result.id)}
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
      </>
    );
  }
}

export default Posts;
