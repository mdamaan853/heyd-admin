import React from "react";
// import Navbar from "../../Layout/Navbar";
import { Table, Row, Container, Col } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Sidebar from ".././../Layout/sidebar/Sidebar"
import axios from "axios";
import { url } from "../../url";
class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
      response: {},
    };
  }
  // Delete Data
  deleteProduct(id) {
    axios.delete(url+`category/${id}`).then(
      (res) => {
        console.log(res);
        const categorys = this.state.categorys.filter((item) => item.id !== id);
        this.setState({ categorys });
      },
      (error) => {
        this.setState({error});
      }
    );
  }

  componentDidMount() {
    axios
      .get(url+`category`)
      .then((res) => {
        console.log(res);
        this.setState({ categorys: res.data.result });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { categorys, currentPage } = this.state;
    return (
      <div>
        <div class="container-fluid">
        <div class="row">
        <div class="col-2">
                <Sidebar/>  
                </div> 
                <div className="col-10" >
       <div className="container">
          <div className="jumbotron mt-4">
            <div className="card">
              <div className="card-body">
                <div className="col-sm-12">
                  <h1>Add Product</h1>
                </div>
        <table
          align="center"
          className="table table-bordered center table-responsive-md "
        >
          <thead>
            <tr>
              <th>S.no</th>
              <th>catName</th>
              <th>parentCategoryId</th>
              <th>status</th>
              <th>createdTime</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categorys.map((result, index) => (
              <tr key={result.id}>
                <td>{(currentPage - 1) * 10 + index + 1}</td>
                <td>{result.catName}</td>
                <td>{result.parentCategoryId}</td>
                <td>{result.status}</td>
                <td>{result.createdTime}</td>
                <td>
                      <button className="btn" type="button">
                        <AiFillEdit
                          color="98FB98"
                          size={30}
                          className="editBtn"
                        />
                      </button>
                  </td>
                  <td>
                      <button
                        className="btn"
                        onClick={() => this.deleteProduct(result.id)}
                        type="button"
                      >
                        <AiFillDelete
                          size={30}
                          className="deleteBtn"
                          color="#626ed4"
                        />
                      </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
export default GetData;
