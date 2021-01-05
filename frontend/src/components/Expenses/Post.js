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
      expenses: [],
      myData:"",
      response: {},
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get(url+`expenses`).then(
      (res) => {
        console.log(res);
        this.setState({ loading: true });
        const expenses = res.data.result;
        this.setState({ expenses });
        this.setState({ loading: false });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }

  // Delete Data

  deleteExpenses = (id) => {
    console.log(id)
    axios
      .delete(url+"expenses/" + id)
      .then(res => {
        console.log(this.state.expenses)
        const Data=this.state.expenses.filter(expense=>expense.id !== id)
        this.setState({expenses:Data})
        console.log(this.state.expenses)
      }).catch(err => {console.log(err)})
  };

  render() {
    const { posts, loading, currentPage } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
                <div className="col-sm-12">
                  <h1 className="my-4">Expense List</h1>
                </div>
                <center>
                  <table
                    align="center"
                    className="table table-bordered table-responsive"
                  >
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Supplier Name</th>
                        <th>Supplier Address</th>
                        <th>Supplier GST</th>
                        <th>Products</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Tax</th>
                        <th>Grand Total</th>
                        <th>Payment Mode</th>
                        <th>Action</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((result, index) => (
                        <tr key={result.id}>
                          <td>{(currentPage - 1) * 10 + index + 1}</td>
                          <td>{result.supplierName}</td>
                          <td>{result.supplierAddress}</td>
                          <td>{result.supplierGST}</td>
                          <td>{result.products}</td>
                          <td>{Moment(result.date).format('DD-MM-YYYY')}</td>
                          <td>{result.total}</td>
                          <td>{result.tax}</td>
                          <td>{result.grandTotal}</td>
                          <td>{result.paymentMode}</td>
                          <td>
                            <button className="btn" type="button">
                              <Link to={"/updateExpense/" + result.id}>
                                <AiFillEdit size={30} className="editBtn" />
                              </Link>
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn"
                              type="button"
                              onClick={() => this.deleteExpenses(result.id)}
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
                </center>
              </div>
    );
  }
}
export default Posts;
