import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./style.css";
import { url } from "../../url";
export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tax: [],
      response: {},
    };
  }
  componentDidMount() {
    axios.get(url+`tax`).then(
      (res) => {
        console.log(res);
        const tax = res.data.result;
        this.setState({ tax });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  // deleteTax = (id) => {
  //   axios.delete(`http://apis.restroqr.link:4040/tax/`+ this.state.id)
  //   .then((res) => {
  //      console.log 
  //     alert("deleted");
  //     this.setState({
  //       tax: this.state.tax.filter((result) => result.id !== id),
  //     });
  //   });
  // };

  // Delete Data
  deleteTax = (id) => {
    if(window.confirm('Are you sure..! you want to delete..?')){
      axios.delete(url+`tax/${id}`)
      .then(res => window.location.reload(true))
      .catch(err => console.log(err))
    }
    };
      // window.location.reload(false)
      // if (res.data.result != null) {
      //   alert("deleted");
      // const tax = this.state.tax.filter(result => result.id !== id);
      // this.setState({ tax });
    // });

  render() {

    const { posts, tax, loading, currentPage } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
              <div className="col-sm-12">
                <h1>Tax List</h1>
              </div>
              <center>
                <table
                  align="center"
                  className="table table-bordered table-responsive"
                >
                  <thead>
                    <tr>
                      <th style={{width:"155px"}}>S.no</th>
                      <th style={{width:"205px"}}>Tax Name</th>
                      <th style={{width:"205px"}}>Tax Percent</th>
                      <th style={{width:"75px"}}>Action</th>
                      <th style={{width:"75px"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((result, index) => (
                      <tr key={result.id}>
                        <td style={{width:"50px"}}>{(currentPage - 1) * 10 + index + 1}</td>
                        <td style={{width:"150px"}}>{result.taxName}</td>
                        <td style={{width:"150px"}}>{result.taxPercent}%</td>
                        <td style={{width:"50px"}}>
                          <button className="btn" type="button">
                            <Link to={"/updateTax/" + result.id}>
                              <AiFillEdit size={30} className="editBtn" />
                            </Link>
                          </button>
                        </td>
                        <td style={{width:"50px"}}>
                          <button
                            className="btn"
                            onClick={() => this.deleteTax(result.id)}
                            type="button"
                          >
                            <AiFillDelete
                              size={30}
                              className="deleteBtn"
                              color="#922c88"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                          <ToastContainer position="top-center" />
              </center>
            </div>
    );
  }
}

export default Posts;
