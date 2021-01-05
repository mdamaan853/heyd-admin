import React from "react";
import axios from "axios";
import { Row, Container, Col } from "react-bootstrap";
import Navbar from "../../Layout/Navbar";
import Posts from "./Post";
import Pagination from "../Expenses/Pagination";
import Sidebar from "../../Layout/sidebar/Sidebar"
class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      error: null,
      users: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10,
    };
  }
  // if(props.product){
  //   this.state=props.product
  // }else {
  //   this.state =this.initialState;
  // }
  componentDidMount() {
    axios.get(`http://apis.restroqr.link:4040/users/`).then(
      (res) => {
        console.log(res);
        this.setState({ loading: true });
        this.setState({ users: res.data.result });
        this.setState({ loading: false });
      },
      (error) => {
        this.setState({ error });
      }
    );
  }

  // editProduct= resultId =>{
  //   console.log(resultId);
  // }
  render() {
    const { error } = this.state;
    const { currentPage, postsPerPage, users, loading } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);
    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <Navbar />
          <div class="container-fluid">
        <div class="row">
        <div class="col-2">
                <Sidebar/>  
                </div> 
                <div className="col-10" >
     
            <Row>
              <Col>
                <center>
                  <Col md={12}>
                    <Posts
                      posts={currentPosts}
                      loading={loading}
                      currentPage={this.state.currentPage}
                    />
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={users.length}
                      currentPage={this.state.currentPage}
                      paginate={paginate}
                      nextPage={nextPage}
                      prevPage={prevPage}
                    />
                  </Col>
                </center>
              </Col>
            </Row>

        </div>
        </div>
        </div>
        </div>
      );
    }
  }
}

export default Userlist;
